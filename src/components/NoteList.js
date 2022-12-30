import PropTypes from "prop-types"

// user Defined
import Fetch from "./Fetch"
import Note from './Note'
import ErrorBoundary from "./ErrorBoundary"


const NoteList = () => {
    let url = "http://localhost:8000/notes"
    let colors = ["#46eb34", "#34c0eb", "#ffbb00", "#84A59D", "#F28482"]

    const getTitle = (note) => {
        let bodyLength = note.body.length
        let newLinePos = note.body.indexOf("\n") < 0 ? bodyLength : note.body.indexOf("\n")

        let res = note.body.substring(0, newLinePos)
        return res
    }

    function getRandomColor() {
        let index = Math.floor(colors.length * Math.random())

        return colors[index]
    }


    function displayNotes(notes) {
        return (
            <div className="note_list">
                {
                    notes.map((value, index) => {
                        return (
                            <ErrorBoundary key={index}>
                                <Note
                                    key={index}
                                    color={getRandomColor()}
                                    text={getTitle(notes[index])}
                                    date_created={value.updated}
                                    nav_link={`/notes/${notes[index].id}`} />
                            </ErrorBoundary>
                        )
                    })
                }

            </div>
        )

    }

    return <Fetch url={url} renderSuccess={displayNotes} />
}

NoteList.propTypes = {
    notes: PropTypes.array
}

export default NoteList
