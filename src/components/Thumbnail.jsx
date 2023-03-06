import { Link } from 'react-router-dom'
import '../styles/Thumbnail.css'
import PropTypes from 'prop-types'

function Thumbnail({ title, cover, id }) {
  return (
    <div className="thumbnail">
      <Link to={`/details/${id}`}>
        <div className="thumb__sub">
          <h3 className="thumb__title">{title}</h3>
          <img className="thumb__img" src={cover} alt="Thumbnail location" />
        </div>
      </Link>
    </div>
  )
}

Thumbnail.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string,
  id: PropTypes.string.isRequired,
}

export default Thumbnail