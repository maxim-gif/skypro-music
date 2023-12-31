import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage/HomePage.js'
import { NotFound } from './pages/NotFound/NotFound.js'
import { Login } from './pages/login/login.js'
import { Registration } from './pages/registration/registration.js'
import { Compilations } from './pages/compilations/compilations.js'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute.js'
import { AuthContext } from '../src/context/authContext.js'
import { useContext } from 'react'
import { Bar } from './components/bar/Bar.js'

export const AppRoutes = () => {
    const { user } = useContext(AuthContext)

    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="*" element={<NotFound />} />
            <Route
                element={
                    <ProtectedRoute
                        isAllowed={user ? Boolean(user.id) : false}
                    />
                }
            >
                <Route path="/" element={<><HomePage /><Bar /></>} />
                <Route path="/compilations/:id" element={<><Compilations /><Bar /></>} />
            </Route>
        </Routes>
    )
}
