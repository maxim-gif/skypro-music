import { Routes, Route } from "react-router-dom";
import  {HomePage}  from "./pages/HomePage/HomePage.js";
import { NotFound } from "./pages/NotFound/NotFound.js";
import { Login } from "./pages/login/login.js";
import { Registration } from "./pages/registration/registration.js";
import { Compilations } from "./pages/compilations/compilations.js";
import { Favorites } from "./pages/favorites/favorites.js";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute.js";




export const AppRoutes = () => {

  
  const userID = localStorage.getItem('user');
  return (

      <Routes>

        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/registration" element={<Registration />} />

        <Route element={<ProtectedRoute isAllowed={Boolean(userID)} />}>
          <Route path="/" element={<HomePage/>} />
          <Route path="/compilations/:id" element={<Compilations/>} />
          <Route path="/favorites" element={<Favorites/>} />
        </Route>

      </Routes>

  );
};

