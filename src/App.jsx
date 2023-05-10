import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Create from "./pages/Create";
import Body from "./pages/Body";
import StoryDetails from "./pages/StoryDetails";
import MyStories from "./pages/MyStories";
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
            <ProtectedRoute redirect="/login">
              <Body />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create"
          element={
            <ProtectedRoute redirect="/login">
              <Create />
            </ProtectedRoute>
          }
        />
        <Route
          path="/mystories"
          element={
            <ProtectedRoute redirect="/login">
              <MyStories />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
