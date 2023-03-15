import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import '../styles/Slideshow.css'
import PropTypes from 'prop-types'

function Slideshow({pictures}) {
    const [current, setCurrent] = useState(0)
    const length = pictures.length

    const previous = () => {
        current === 0 ? setCurrent(pictures.length - 1) : setCurrent(current-1)
    }

    const next = () => {
        current === pictures.length - 1 ? setCurrent(0) : setCurrent(current + 1)
    }

    return (
        <div className="Slideshow">
            {length > 1 ? (
            <button className="Slideshow__button Slideshow__button--left" onClick={previous} >
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            ) : null }

            <img
                className="Slideshow__img"
                src={pictures[current]}
                alt="Cover Location"
            />

            {length > 1 ? (
            <button className="Slideshow__button Slideshow__button--right" onClick={next} >
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            ) : null }

                <span className='Slideshow__number'>
                    {length > 1 ? ( current + 1 + '/' + length) : null}
                </span>

        </div>
        )
}

Slideshow.propTypes = {
    pictures: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
}

export default Slideshow