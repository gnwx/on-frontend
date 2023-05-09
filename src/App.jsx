import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Create from "./pages/Create";
import Body from "./pages/Body";
import StoryDetails from "./pages/StoryDetails";
import Navbar from "./components/Navbar";
import Path from "./components/Path";
import ProtectedRoute from "./routes/ProtectedRoute";
function App() {
  return (
    <Router>
      <Navbar />
      <Path />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/story/:id" element={<StoryDetails />} />
        <Route
          path="/add/:id"
          element={
            <ProtectedRoute>
              <Body />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create"
          element={
            <ProtectedRoute>
              <Create />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
