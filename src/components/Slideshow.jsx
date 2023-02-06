import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import '../styles/Slideshow.css'
import PropTypes from 'prop-types'

function Slideshow({pictures}) {
    const [current, setCurrent] = useState(0)
    return (
        <div className="Slideshow">
            <button
            className="Slideshow__button Slideshow__button--left"
                onClick={() => {
                    current === 0 ? setCurrent(pictures.length - 1) : setCurrent(current-1)
            }}
            >
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <img
                className="Slideshow__img"
                src={pictures[current]}
                alt="Cover Location"
            />

            <button
                    className="Slideshow__button Slideshow__button--right"
                    onClick={() => {
                    current === pictures.length - 1 ? setCurrent(0) : setCurrent(current + 1)
                    }}
                >
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
        </div>
    )
}

Slideshow.propTypes = {
    pictures: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
}

export default Slideshow