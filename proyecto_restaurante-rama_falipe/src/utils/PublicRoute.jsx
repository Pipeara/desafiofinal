import { Navigate, Outlet } from 'react-router-dom'

const PublicRoute = ({ isLogin }) => {
    return isLogin ? <Navigate to='/' /> : <Outlet />
}

export default PublicRoute