// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import RestauranteProvider from './context/RestauranteContext'

// import { RestauranteContext } from '../../context/RestauranteContext';
// import { useContext } from 'react';


import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';

import RestauranteHome from './components/home/RestauranteHome';
// import Registro from './pages/Registro';
import Login from './pages/Login';
import RestauranteNavbar from './components/navbar/RestauranteNavbar';
import PlatoDetalle from './views/detalles/PlatoDetalle';
import Carrito from './views/carrito/Carrito';
import HomeAdmin from './components/home/HomeAdmin';
import Error from './views/RestauranteError/Error';


function App() {
  // const { user, setUser } = useContext(RestauranteContext);
  return (
    <div>
      <RestauranteProvider>
        <BrowserRouter>
          <RestauranteNavbar />

          <Routes>
            {/* {
              !user.length > 0 ? 
              <Route path="/login" element={ <Login setUser={ setUser } user={ user } /> } /> : 
              <Route path="/admin" element={ <HomeAdmin user={user} setUser={setUser} />} /> 
            } */}
            
            <Route path="/" element={ <RestauranteHome />} />
            {/* <Route path="/registrarse" element={<Registro />} /> */}
            <Route path="/login" element={ <Login /> } />
            <Route path='/admin' element={ <HomeAdmin /> } />
            <Route path="/pizza/:id" element={ <PlatoDetalle /> } />
            <Route path="/carrito" element={ <Carrito />} />
            {/* <Route path='footer' element={ <Footer /> } /> */}
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </RestauranteProvider>
    </div>
  )
}

export default App
