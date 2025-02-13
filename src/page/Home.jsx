import HeaderHome from '../components/HeaderHome';
import ContentHomeLeft from '../components/ContentHomeLeft';
import ContentHomeRight from '../components/ContentHomeRight';

function Home() {
  return (
    <div className="container-home">
      <HeaderHome />
      <div className="container-home-content">
        <ContentHomeLeft />
        <ContentHomeRight />
      </div>
    </div>
  );
}

export default Home;
