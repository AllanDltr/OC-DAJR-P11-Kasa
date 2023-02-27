import '../styles/Gallery.css'
import { useState, useEffect } from 'react'
import Thumbnail from './Thumbnail'

function Gallery() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('logements.json')
      .then(function (res) {
        return res.json()
      })
      .then(function (data) {
        setData(data)
      })
      .catch(function (err) {
        console.log(err)
      })
  }, [])

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