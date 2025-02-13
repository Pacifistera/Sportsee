import { useState, useEffect } from 'react';
import {
  fetchUserData,
  getUserMainData,
  getUserActivity,
} from '../API/dataService';

const YourComponent = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchUserData(12);
      const mainData = getUserMainData(data);
      const activity = getUserActivity(data);
      setUserData({ mainData, activity });
    };

    loadData();
  }, []);

  // ... reste du composant
};

export default YourComponent;
