import { PropTypes } from 'prop-types'

const WallpaperList = ({photos, page}) => {
    console.log(photos)
  return (
    <div>
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
  page: PropTypes.number.isRequired
}

export default WallpaperList