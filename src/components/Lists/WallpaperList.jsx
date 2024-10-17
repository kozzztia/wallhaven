import { PropTypes } from 'prop-types'
import styles from './styles.module.css'

const WallpaperList = ({photos, page, className}) => {
  return (
    <div className={[className, styles.listWrapper].join(' ')}>
        <p>{page}</p>
        <ul>
            {photos.map((photo) => (
                <li key={photo.id}>
                    <img src={photo.src.tiny} alt={photo.alt} />
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