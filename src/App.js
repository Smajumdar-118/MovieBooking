import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom";
import Navbar from './components/Navbar';
import Show from './components/Show';
import Summary from './components/Summary';
import Book from './components/Book';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Show />}></Route>
          <Route exact path="/Summary" element={<Summary />}></Route>
          <Route exact path="/Book" element={<Book />}></Route>

        </Routes>


      </Router>


    </>
  );
}

export default App;
