import '../styles/Cards.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Cards = ({ flatId, image, title }) => (
  <div className={Cards.cardWrapper}>
    <Link className={Cards.cardLink} to={`/flat/${flatId}`}>
      <div className={Cards.cardContent}>
        <div className={Cards.cardImageWrapper}>
          <img className={Cards.cardImage} src={image} alt='' />
        </div>
        <h2 className={Cards.cardTitle}>{title}</h2>
      </div>
    </Link>
  </div>
);

Cards.propTypes = {
  flatId: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
};

export default Cards;