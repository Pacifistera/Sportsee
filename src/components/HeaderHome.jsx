import '../styles/HeaderHome.scss';

const HeaderHome = ({ mainData }) => {
  return (
    <div className="container-header-home">
      {mainData ? (
        <>
          <h1>
            Bonjour <span>{mainData.userInfos.firstName}</span>
          </h1>
          <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
        </>
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  );
};

export default HeaderHome;
