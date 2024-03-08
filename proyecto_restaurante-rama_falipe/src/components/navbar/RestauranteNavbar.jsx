import { NavLink, useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
// import { Navbar } from 'react-bootstrap';

import '../../App.css';

// import 'bootstrap/dist/css/bootstrap.min.css';
import './NavbarStyle.css'

// import { RestauranteContext } from '../../context/RestauranteContext';
// import { useContext } from 'react';

const RestauranteNavbar = () => {
  const navigate = useNavigate();
  // const { user, setUser } = useContext(RestauranteContext);


  const isLogin = (user) => {
    if (!user) {
      return (
        <div>
          {/* <NavLink to='/registrarse' className='btn m-1 setActiveClass'>Registrarse</NavLink> */}
          <NavLink to='/login' className='setActiveClass m-5'>Login</NavLink>
        </div>
      )
    }

    // navigate('/admin')

    // return (
    //   <div>
    //     <NavLink to='/admin'></NavLink>
    //   </div>
    // )
  }

  const setActiveClass = ({ isActive }) => (isActive ? "active" : "no-actve");

  return (
    <div className='container-fluid sticky-top'>
      <Navbar className="mi-nav" sticky='top' expand='xl'>
        <span>
          <NavLink to='/'>
            <img src="https://images.ecestaticos.com/h53ifQ5cwmB5AbJT5MR7yTZ0_DA=/125x0:2144x1513/996x747/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F3b8%2F281%2Fef2%2F3b8281ef2d44ef19e6a613d298ccf635.jpg" style={{width: '6%'}} alt="logo" />
          </NavLink>
        </span>
        <div className='mi-nav'>
          <span>
            <NavLink to='/' className='setActiveClass, m-5'>Inicio</NavLink>
            <NavLink to='/carrito' className='m-5'> Detalle </NavLink>
          </span>
          {isLogin()}
        </div>
      </Navbar>
    </div>
  )
}

export default RestauranteNavbar