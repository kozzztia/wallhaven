import styles from './styles.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Card = ({ photo }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped((prev) => !prev); // Переключаем состояние переворота
  };

  return (
    <div className={`${styles.card} ${isFlipped ? styles.flipped : ''}`} onClick={handleCardClick}>
      <div className={styles.cardInner}>
        <div className={styles.cardFront}>
          <img src={photo.src.tiny} alt={photo.alt} className={styles.image} />
        </div>
        <div className={styles.cardBack}>
          <h3>Additional Info</h3>
          {photo.alt && <p>{photo.alt}</p>}
          <p className={styles.photographer}>Photo by: 
            <a 
              href={photo.photographer_url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.link}
            >
              {photo.photographer}
            </a>
          </p>
          <a 
            href={photo.src.original} 
            download 
            className={styles.downloadLink}
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  photo: PropTypes.shape({
    src: PropTypes.shape({
      tiny: PropTypes.string.isRequired,
      original: PropTypes.string.isRequired,
    }).isRequired,
    alt: PropTypes.string.isRequired,
    photographer: PropTypes.string.isRequired,
    photographer_url: PropTypes.string.isRequired,
  }).isRequired,
}

export default Card;
