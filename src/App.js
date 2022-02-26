import './App.css';
import { Route, Routes} from 'react-router-dom';
import Default from './pages/Default';
import NoteBody from './pages/NoteBody';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path="/"  element={<Default />} />
        <Route path="/notes/:id" element={<NoteBody />}/>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  )
}

export default App;
