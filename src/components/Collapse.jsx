import { useState } from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

export function Collapse({datas, title}) {
    const [isOpen, setIsOpen] = useState(false)
    datas = Array.isArray(datas) ? datas : [datas]

    return isOpen ? (
        <div className="Dropdown">
            <button className="Dropdown__label" onClick={() => setIsOpen(false)} > 
            {title} <FontAwesomeIcon icon={faChevronUp} />
            </button>
                    <ul className="Dropdown__list">
                        {datas.map((item, index) => (
                        <li key={`${item}-${index}`} > {item} </li>
                        ))}
                    </ul>
        </div>
    ) : (
        <div className="Dropdown">
            <button className="Dropdown__label" onClick={() => setIsOpen(true)} > 
            {title} <FontAwesomeIcon icon={faChevronDown} />
            </button>
        </div>
    )
}

Collapse.propTypes = {
    datas: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
    title: PropTypes.string.isRequired,
  }
