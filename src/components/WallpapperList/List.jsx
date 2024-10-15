import PropTypes from 'prop-types';
import styles from "./styles.module.css";

const List = ({data, meta}) => {
    console.log(data , meta)
  return (
    <>
        <h4 className={styles.page}>{meta.current_page}</h4>

        <ul className={styles.list}>
            {
                data?.map(item => {
                    return (
                        <li key={item.id}>
                            <h2>{item.category}</h2>
                            <img src={item.thumbs.small} alt={item} />
                        </li>
                    )
                })
            }

        </ul>
    </>
  )
}

List.propTypes = {
    data: PropTypes.array.isRequired,
    meta: PropTypes.object.isRequired
}


export default List