import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import MealPlanner from "./pages/MealPlanner";
import Recipies from "./pages/Recipies";
import ExercisePlanner from "./pages/ExercisePlanner";
import Chat from "./pages/Chat";
import AboutUs from "./components/AboutUs";
import { Login } from "@mui/icons-material";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/meal-planner" element={<MealPlanner />} />
        <Route path="/exercise-planner" element={<ExercisePlanner />} />
        <Route path="/recipies" element={<Recipies />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
