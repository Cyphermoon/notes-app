import React from 'react'
import { useNavigate } from 'react-router'

//Third party module
import { useParams } from 'react-router-dom'
import uuid from "react-uuid"

//User Defined Module
import Fetch from '../components/Fetch'
import { useNotes } from '../components/NotesProvider'
import SideNote from '../components/SideNote'


const NoteBody = () => {
    let { id } = useParams()
    let url = `http://localhost:8000/notes/${id}`
    
    const { createNote, updateNote, deleteNote } = useNotes()
    let navigate = useNavigate()


    function handleSubmit(note){
        updateNote(note, id)
        navigate("/")
    }


    function displayNote(note, setData){
        return(
            <div className="flex">
                <div className="note_body_container">
                    <textarea 
                    onChange={(e) => {setData({...note, body:e.target.value})}} 
                    autoFocus
                    value={note.body}
                    placeholder="Enter you note"
                    >
                    </textarea>
                    <button className="btn btn_done" onClick={() => {handleSubmit(note)}}>done</button>
                    <button className="btn btn_delete" onClick={() => {deleteNote(id)}}>Delete</button>
                    
                    </div>
                    <SideNote 
                        header_text="Wanna create a new note" 
                        header_paragraph="you can now create a new note right from another note 🚀 🚀 🚀 "
                        cta_text="create note"
                        createNote = {() => {createNote(uuid())}}
                        />

            </div>
        )
    }

    return <Fetch url={url} renderSuccess={displayNote} />
}

export default NoteBody
