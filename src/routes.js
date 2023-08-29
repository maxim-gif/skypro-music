import { Routes, Route } from "react-router-dom";
import  {HomePage}  from "./pages/HomePage/HomePage.js";
import { NotFound } from "./pages/NotFound/NotFound.js";
import { Login } from "./pages/login/login.js";
import { Registration } from "./pages/registration/registration.js";
import { Compilations } from "./pages/compilations/compilations.js";
import { Favorites } from "./pages/favorites/favorites.js";


export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/compilations" element={<Compilations />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
};