import Navbar from "./components/Navbar"
import About from "./components/About"
import Home from "./components/Home"
import NoteState from './context/notes/noteState'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"
import { Routes } from "react-router"
import Alert from "./components/Alert"
import Login from "./components/Login"
import Signup from "./components/Signup"
function App() {
  return (
    <>
    <NoteState>
     <Router>
        <Navbar/>
        <Alert Alert={'Alert'}/>
          <Routes>
          <Route exact path="/" element={<Home />}> </Route>
          <Route exact path="/about" element={<About />}> </Route>
          <Route exact path="/login" element={<Login />}> </Route>
          <Route exact path="/signup" element={<Signup/>}> </Route>
          </Routes>
        </Router>
    </NoteState>
   </>
  );
}

export default App;
