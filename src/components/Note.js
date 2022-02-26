import React from 'react'
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router'

const Note = ({text, nav_link, color, date_created}) => {
    let navigate = useNavigate()
    return (
        <div className="note" onClick={() => navigate(nav_link)} style={{backgroundColor : color}}>
            <p className="note_text">
                <Link to={nav_link}>
                    {text}
                </Link>
            </p>
            <span className="date_created">{date_created}</span>
        </div>
    )
}

Note.propTypes = {
    text : PropTypes.string,
    nav : PropTypes.string
}

export default Note
