import userEvent from "@testing-library/user-event";
import NoteList from "../components/NoteList"
const { render, screen } = require("@testing-library/react")

test("Demo test on page", async () => {
    render(<NoteList />);

    screen.debug()

})

// test("on type button should be enabled", () => {
//     render(<NoteList />)

//     userEvent.type(screen.getByPlaceholderText("amount"), "30")

//     expect(screen.findByRole("button", {"name": /loading/i})).toBeEnabled()
// })