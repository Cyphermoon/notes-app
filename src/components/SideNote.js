import React from 'react'
import Proptypes from "prop-types"

const SideNote = ({header_text, header_paragraph, cta_text, createNote}) => {
    return (
        <div className="aside_content">
            <h2>{header_text}</h2>
            <p>{header_paragraph}</p>
            <button className="btn btn_create" onClick={() => createNote()}>{cta_text}</button>
        </div>
    )
}

SideNote.defaultProps = {
    header_text : "This is a header",

    header_paragraph : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, nesciunt, quisquam vel voluptate asperiores nulla ducimus repellat expedita sunt in quam laudantium possimus. Adipisci hic impedit, quaerat atque consequuntur repellat.",

    cta_text : "click me"
}


SideNote.propTypes = {
    header_text : Proptypes.string
}

export default SideNote
