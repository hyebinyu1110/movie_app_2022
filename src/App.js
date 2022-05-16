import { BrowserRouter as Router, Routes, Route, }
  from "react-router-dom";
  
import Home from "./components/Home";
import About from "./routes/About";
import Navigation from "./routes/Navigation";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Navigation />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movie-details" element={<Detail />} />
      </Routes>
    </Router>);
}

export default App;