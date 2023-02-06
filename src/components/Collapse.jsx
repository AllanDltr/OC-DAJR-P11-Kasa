import { useState } from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import '../styles/Collapse.css'

// create a param for the function Collapse
// the param is an object with two keys: datas and title
// datas is an array of strings
// title is a string
// the function returns a div with a button and a list
// the button is a toggle button
// the list is hidden by default
// when the button is clicked, the list is displayed
// when the button is clicked again, the list is hidden
// the button displays a down arrow when the list is hidden
// the button displays an up arrow when the list is displayed

function Collapse({datas, title}) {
    const [isOpen, setIsOpen] = useState(true)
    datas = Array.isArray(datas) ? datas : [datas]

    return isOpen ? (
        <div className="Dropdown">
            <button className="Dropdown__label" onClick={() => setIsOpen(false)} > 
            {title} <FontAwesomeIcon icon={faChevronDown} />
            </button>
        </div>
    ) : (
        <div className="Dropdown">
            <button className="Dropdown__label" onClick={() => setIsOpen(true)} > 
            {title} <FontAwesomeIcon icon={faChevronUp} />
            </button>
                    <ul className="Dropdown__list">
                        {datas.map((item, index) => (
                        <li key={`${item}-${index}`} > {item} </li>
                        ))}
                    </ul>
        </div>
    )
}

Collapse.propTypes = {
    datas: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
    title: PropTypes.string.isRequired,
  }

export default Collapse