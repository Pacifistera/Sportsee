import { useState, useEffect } from 'react';
import { fetchUserData, getUserMainData } from '../API/dataService';
import caloriesIcon from '../assets/calories-icon.svg';
import proteinIcon from '../assets/protein-icon.svg';
import carbsIcon from '../assets/carbs-icon.svg';
import fatIcon from '../assets/fat-icon.svg';

const ContentHomeRight = () => {
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
    userData && (
      <div>
        <div>
          <img src={caloriesIcon} alt="calories" />
          <h2>{userData.mainData.keyData.calorieCount}kCal</h2>
          <p>Calories</p>
        </div>
        <div>
          <img src={proteinIcon} alt="protein" />
          <h2>{userData.mainData.keyData.proteinCount}g</h2>
          <p>Protéines</p>
        </div>
        <div>
          <img src={carbsIcon} alt="carbs" />
          <h2>{userData.mainData.keyData.carbohydrateCount}g</h2>
          <p>Glucides</p>
        </div>
        <div>
          <img src={fatIcon} alt="fat" />
          <h2>{userData.mainData.keyData.lipidCount}g</h2>
          <p>Lipides</p>
        </div>
      </div>
    )
  );
};

export default ContentHomeRight;
