import { useState, useEffect } from 'react';
import { fetchUserData, getUserMainData } from '../API/dataService';

const HeaderHome = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchUserData(12);
      const mainData = getUserMainData(data);
      setUserData({ mainData });
    };

    loadData();
  }, []);

  return (
    <div>
      {userData ? (
        <>
          <h1>Bonjour {userData.mainData.userInfos.firstName}</h1>
          <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
        </>
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  );
};

export default HeaderHome;
