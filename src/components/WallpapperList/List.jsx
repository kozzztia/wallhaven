import PropTypes from 'prop-types';
import styles from "./styles.module.css";

const List = ({data, meta}) => {

  return (
    <>
        <h4 className={styles.page}>{meta}</h4>

        <ul className={styles.list}>
            {
                data?.map(item => {
                    return (
                        <li key={item.id}>
                            <img src={item.src.tiny} alt={item.alt} />
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
    meta: PropTypes.number.isRequired
}


export default List