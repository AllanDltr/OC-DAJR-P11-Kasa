import '../styles/Gallery.css'
import { useState, useEffect } from 'react'
import Thumbnail from './Thumbnail'

function Gallery() {
  const [data, setData] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('logements.json')
      .then(function (res) {
        return res.json()
      })
      .then(function (data) {
        setData(data)
        setIsLoaded(true)
      })
      .catch(function (err) {
        setError(err)
        setIsLoaded(true)
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