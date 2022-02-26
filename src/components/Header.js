import React from 'react'
import { useNotes } from "./NotesProvider"
import uuid from "react-uuid"

const Header = () => {
    let { createNote } = useNotes()
     return (
        <header>
            <h1>Notes</h1>
            <button className="btn_add" onClick={() => {createNote(uuid())}}> add</button>
        </header>
    )
}

export default Header
