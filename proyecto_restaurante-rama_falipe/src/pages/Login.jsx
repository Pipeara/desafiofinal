import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialForm = { correo: 'algo@correo.com', password: '1234' };

const Login = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState('user');
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (correo === '' || password === '') {
      setError(true);
      return;
    }

    setError(false);

    // Check user type and navigate accordingly
    if (userType === 'user') {
      // Navigate to user page
      navigate("/");
    } else if (userType === 'admin') {
      // Navigate to admin page
      navigate('/admin');
    }
  };

  return (
    <div className='container-sm col-3'>
      <form className='formulario' onSubmit={handleSubmit}>
        <label htmlFor='email'>Correo</label>
        <input
          type='email'
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          id='email'
        />

        <label htmlFor='password'>Password</label>
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id='password'
        />

        <div>
          <label>
            <input
              type='radio'
              value='user'
              checked={userType === 'user'}
              onChange={() => setUserType('user')}
            />
            Usuario
          </label>
          <label>
            <input
              type='radio'
              value='admin'
              checked={userType === 'admin'}
              onChange={() => setUserType('admin')}
            />
            Administrador
          </label>
        </div>

        <button type='submit' className='btn btn-primary'>
          Iniciar
        </button>
      </form>
      {error && <p id='login-error'>Todos los campos son obligatorios</p>}
    </div>
  );
};

export default Login;
