import HeaderHome from '../components/HeaderHome';
import ContentHomeLeft from '../components/ContentHomeLeft';
import ContentHomeRight from '../components/ContentHomeRight';

import { useState, useEffect } from 'react';
import {
  fetchUserData,
  getUserMainData,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
} from '../API/dataService';

import '../styles/Home.scss';

const Home = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchUserData(12);

        const mainData = getUserMainData(data);
        const activityData = getUserActivity(data);
        const averageSessionsData = getUserAverageSessions(data);
        const performanceData = getUserPerformance(data);

        setUserData({
          mainData,
          activityData,
          averageSessionsData,
          performanceData,
        });
      } catch (error) {
        setError(error.message);
      }
    };

    loadData();
  }, []);

  if (error) return <div className="error-message">{error}</div>;
  if (!userData) return <div>Chargement...</div>;

  return (
    <div className="container-home">
      <HeaderHome mainData={userData.mainData} />
      <div className="container-home-content">
        <ContentHomeLeft
          mainData={userData.mainData}
          activityData={userData.activityData}
          averageSessionData={userData.averageSessionsData}
          performanceData={userData.performanceData}
        />
        <ContentHomeRight
          calorieCount={userData.mainData.keyData.calorieCount}
          proteinCount={userData.mainData.keyData.proteinCount}
          carbohydrateCount={userData.mainData.keyData.carbohydrateCount}
          lipidCount={userData.mainData.keyData.lipidCount}
        />
      </div>
    </div>
  );
};

export default Home;
