import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Attendances from "./pages/Attendances";
import Students from "./pages/Students";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Error from "./pages/Error";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/attendances" element={<Attendances />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
