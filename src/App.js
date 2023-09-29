import Navbar from "./components/Navbar"
import About from "./components/About"
import Home from "./components/Home"
import NoteState from './context/notes/noteState'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"
import { Routes } from "react-router"
function App() {
  return (
    <>
    <NoteState>
     <Router>
        <Navbar/>
          <Routes>
          <Route exact path="/" element={<Home />}> 
          </Route>
          <Route exact path="/about" element={<About />}> </Route>
          </Routes>
        </Router>
    </NoteState>
   </>
  );
}

export default App;
