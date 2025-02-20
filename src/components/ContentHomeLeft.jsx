import GraphOne from './graphOne';
import GraphTwo from './graphTwo';
import GraphThree from './graphThree';
import GraphFour from './graphFour';

import '../styles/ContentHomeLeft.scss';

// const ContentHomeLeft = ({ userData }) => {
//   if (!userData) return <div>Chargement...</div>;
//   console.log(userData);
//   return (
//     <div>
//       <GraphOne sessions={userData.activityData.sessions} />
//       <GraphTwo data={userData.averageSessionsData.sessions} />
//       <GraphThree data={userData.performanceData.data} />
//       <GraphFour data={userData.mainData.todayScore} />
//     </div>
//   );
// };

const ContentHomeLeft = ({
  activityData,
  averageSessionData,
  performanceData,
  mainData,
}) => {
  if (!activityData || !averageSessionData || !performanceData || !mainData)
    return <div>Chargement...</div>;

  return (
    <div className="container-graph">
      <GraphOne sessions={activityData.sessions} />
      <GraphTwo sessions={averageSessionData.sessions} />
      <GraphThree data={performanceData.data} kind={performanceData.kind} />
      <GraphFour score={mainData} />
    </div>
  );
};

export default ContentHomeLeft;
