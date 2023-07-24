import Navbar from "./ReactPractice/Navbar";
import Home from "./ReactPractice/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./ReactPractice/Create";
import BlogDetails from "./ReactPractice/BlogDetails";
import NotFound from "./ReactPractice/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
