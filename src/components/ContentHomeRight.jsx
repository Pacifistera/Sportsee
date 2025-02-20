import caloriesIcon from '../assets/calories-icon.svg';
import proteinIcon from '../assets/protein-icon.svg';
import carbsIcon from '../assets/carbs-icon.svg';
import fatIcon from '../assets/fat-icon.svg';
import '../styles/ContentHomeRight.scss';

const ContentHomeRight = ({
  calorieCount,
  proteinCount,
  carbohydrateCount,
  lipidCount,
}) => {
  return (
    calorieCount &&
    proteinCount &&
    carbohydrateCount &&
    lipidCount && (
      <div className="container-nutrition">
        <div className="container-nutrition-item">
          <img src={caloriesIcon} alt="calories" />
          <div className="container-nutrition-item-text">
            <h2>{calorieCount}kCal</h2>
            <p>Calories</p>
          </div>
        </div>
        <div className="container-nutrition-item">
          <img src={proteinIcon} alt="protein" />
          <div className="container-nutrition-item-text">
            <h2>{proteinCount}g</h2>
            <p>Protéines</p>
          </div>
        </div>
        <div className="container-nutrition-item">
          <img src={carbsIcon} alt="carbs" />
          <div className="container-nutrition-item-text">
            <h2>{carbohydrateCount}g</h2>
            <p>Glucides</p>
          </div>
        </div>
        <div className="container-nutrition-item">
          <img src={fatIcon} alt="fat" />
          <div className="container-nutrition-item-text">
            <h2>{lipidCount}g</h2>
            <p>Lipides</p>
          </div>
        </div>
      </div>
    )
  );
};

export default ContentHomeRight;
