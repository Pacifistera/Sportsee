import { useState, useEffect } from 'react';
import {
  fetchUserData,
  getUserMainData,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
} from '../API/dataService';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const ContentHomeLeft = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
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
    };

    loadData();
  }, []);

  if (!userData) return <div>Chargement...</div>;

  return (
    <div>
      <BarChart width={835} height={320} data={userData.activityData.sessions}>
        <CartesianGrid strokeDasharray="3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />

        <Bar dataKey="calories" fill="#E60000" />
        <Bar dataKey="kilogram" fill="#282D30" />
      </BarChart>
    </div>
  );
};

export default ContentHomeLeft;
