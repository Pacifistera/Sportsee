import mockData from '../Mock.json';

async function fetchUserData(userId, useMock = true) {
  console.log(mockData.USER_ACTIVITY);
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
    // return mockData;
  }

  try {
    const response = await fetch(`http://votre-api/user/${userId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
    return null;
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
