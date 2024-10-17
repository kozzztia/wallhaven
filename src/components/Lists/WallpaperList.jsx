import { PropTypes } from 'prop-types'
import styles from './styles.module.css'
import Crad from './Card/Card'

const WallpaperList = ({photos, page, className}) => {
  return (
    <div className={[className, styles.listWrapper].join(' ')}>
        <p>Pge number : {page}</p>
        <ul>
            {photos.map((photo) => (
                <li key={photo.id} className={styles.card}>
                  <Crad photo={photo} />
                </li>
            ))}
        </ul>
    </div>
  )
}

WallpaperList.propTypes = {
  photos: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  className: PropTypes.string
}

export default WallpaperList