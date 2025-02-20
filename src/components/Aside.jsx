import icon1 from '../assets/icon.svg';
import icon2 from '../assets/icon2.svg';
import icon3 from '../assets/icon3.svg';
import icon4 from '../assets/icon4.svg';

import '../styles/Aside.scss';

function Aside() {
  return (
    <aside className="aside">
      <div className="icons">
        <ul>
          <li>
            <img src={icon1} alt="icone" />
          </li>
          <li>
            <img src={icon2} alt="icone" />
          </li>
          <li>
            <img src={icon3} alt="icone" />
          </li>
          <li>
            <img src={icon4} alt="icone" />
          </li>
        </ul>
      </div>
      <div className="copyright">
        <p>Copyright, SportSee 2020</p>
      </div>
    </aside>
  );
}

export default Aside;
