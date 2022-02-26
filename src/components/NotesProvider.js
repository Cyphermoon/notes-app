import React from 'react'
import { createContext, useContext} from 'react'
import { useNavigate } from 'react-router'

const NoteContext = createContext()

export const useNotes =  () => useContext(NoteContext)

const ColorProvider = ({children}) => {
    let navigate = useNavigate()

    function createNote(id){
        fetch(`http://localhost:8000/notes/`, {
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body: JSON.stringify({
                "id":id,
                "body":"",
                "updated":new Date().toDateString()
            })
        })
        navigate(`/notes/${id}`)
    }


    function updateNote(note, id){
        fetch(`http://localhost:8000/notes/${id}`, {
            method:"PUT",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(note)
        })

    }
    

    function deleteNote(id){
        fetch(`http://localhost:8000/notes/${id}`, {
            method:"DELETE",
        })
        navigate("/")
    }

  return(
    <NoteContext.Provider value={{createNote, updateNote, deleteNote}}>
        {children}
    </NoteContext.Provider>
  )
}

export default ColorProvider
