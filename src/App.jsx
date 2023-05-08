import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Create from "./pages/Create";
import Body from "./pages/Body";
import StoryDetails from "./pages/StoryDetails";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<Create />} />
        <Route path="/add/:id" element={<Body />} />
        <Route path="/story/:id" element={<StoryDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
