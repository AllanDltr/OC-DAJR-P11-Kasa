import { useState } from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import '../styles/CollapseSlideshow.css'

export function CollapseSlideshow({datas, title}) {
    const [isOpen, setIsOpen] = useState(false)
    datas = Array.isArray(datas) ? datas : [datas]

    return isOpen ?  (
        <div className=" Dropdown__Slideshow">
            <button className="  Dropdown__Slideshow__label" onClick={() => setIsOpen(false)} >
            {title} <FontAwesomeIcon icon={faChevronUp} />
            </button>
                    <ul className=" Dropdown__Slideshow__list">
                        {datas.map((item, index) => (
                        <li key={`${item}-${index}`} > {item} </li>
                        ))}
                    </ul>
        </div>
    ) : (
        <div className=" Dropdown__Slideshow">
            <button className=" Dropdown__Slideshow__label" onClick={() => setIsOpen(true)} >
            {title} <FontAwesomeIcon icon={faChevronDown} />
            </button>
        </div>
    )
}

CollapseSlideshow.propTypes = {
    datas: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
    title: PropTypes.string.isRequired,
  }