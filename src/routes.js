import { Routes, Route } from "react-router-dom";
import  {HomePage}  from "./pages/HomePage/HomePage.js";
import { NotFound } from "./pages/NotFound/NotFound.js";
import { Login } from "./pages/login/login.js";
import { Registration } from "./pages/registration/registration.js";
import { Compilations } from "./pages/compilations/compilations.js";
import { Favorites } from "./pages/favorites/favorites.js";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute.js";
import PropTypes from 'prop-types';


export const AppRoutes = ({ user, logout, login }) => {
  return (
    <Routes>

      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<Login login={login}/>} />
      <Route path="/registration" element={<Registration />} />

      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/" element={<HomePage logout={logout}/>} />
        <Route path="/compilations/:id" element={<Compilations logout={logout}/>} />
        <Route path="/favorites" element={<Favorites logout={logout}/>} />
      </Route>

    </Routes>
  );
};

AppRoutes.propTypes = {
  user: PropTypes.string,
  logout: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
};