import mockData from '../Mock.json';

async function fetchUserData(userId, useMock = false) {
  if (useMock) {
    const data = {
      USER_MAIN_DATA: mockData.USER_MAIN_DATA.find((user) => {
        return user.id === userId;
      }),
      USER_ACTIVITY: mockData.USER_ACTIVITY.find((user) => {
        return user.userId === userId;
      }),
      USER_AVERAGE_SESSIONS: mockData.USER_AVERAGE_SESSIONS.find((user) => {
        return user.userId === userId;
      }),
      USER_PERFORMANCE: mockData.USER_PERFORMANCE.find((user) => {
        return user.userId === userId;
      }),
    };
    console.log('data', data);
    return data;
  }

  try {
    // Récupération de toutes les données en parallèle
    const [mainData, activity, sessions, performance] = await Promise.all([
      fetch(`http://localhost:3000/user/${userId}`).then((res) => res.json()),
      fetch(`http://localhost:3000/user/${userId}/activity`).then((res) =>
        res.json()
      ),
      fetch(`http://localhost:3000/user/${userId}/average-sessions`).then(
        (res) => res.json()
      ),
      fetch(`http://localhost:3000/user/${userId}/performance`).then((res) =>
        res.json()
      ),
    ]);

    return {
      USER_MAIN_DATA: mainData.data,
      USER_ACTIVITY: activity.data,
      USER_AVERAGE_SESSIONS: sessions.data,
      USER_PERFORMANCE: performance.data,
    };
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
    throw new Error(
      'Erreur lors de la récupération des données ! Merci de réessayer plus tard.'
    );
  }
}

function getUserMainData(data) {
  return data.USER_MAIN_DATA || {};
}

function getUserActivity(data) {
  return data.USER_ACTIVITY || {};
}

function getUserAverageSessions(data) {
  return data.USER_AVERAGE_SESSIONS || {};
}

function getUserPerformance(data) {
  return data.USER_PERFORMANCE || {};
}

export {
  fetchUserData,
  getUserMainData,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
};
