import '../styles/Gallery.css'
import Thumbnail from './Thumbnail'
import {data} from '../datas/logements.js'

function Gallery() {

    return (
      <div>
        <div className="gallery">
          {data.map((location) => (
            <Thumbnail
              key={location.id}
              id={location.id}
              title={location.title}
              cover={location.cover}
            />
          ))}
          </div>
      </div>
    )
  }

export default Gallery