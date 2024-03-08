import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import { RestauranteContext } from '../../context/RestauranteContext';

import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

import 'bootstrap/dist/css/bootstrap.min.css';

import '../home/Home.css'

const Cartas = ({ plato }) => {
  const navigateRestaurante = useNavigate();
  const { agregarAlCarrito } = useContext(RestauranteContext);

  const buscarPlato = () => {
    navigateRestaurante(`/pizza/${plato.id}`);
  }

  return (
    <div>
      {
        <div className="card" style={{width: '25rem'}}>
          <img src={ plato.img } alt={ plato.name } className='card-img-top' />
          <div className='card-body'>
              <h1 className='fw-bold text-center card-title'>
                {plato.name.charAt(0).toUpperCase() + plato.name.slice(1)}
              </h1>
              <h5 className='card-text card-title'>
                <strong className='card-title fs-4'>Ingredientes:</strong>
              </h5>
              { plato.ingredients.map( (ingrediente, indice) => <div key={indice} className='text-start'>
                {/* <img src='/pizza.png' alt='pizza' style={{width: '7%'}} className='mx-2' />  */}
                {ingrediente}
              </div> ) }
              <div className='fw-bold fs-4 card-text'>
                Precio: $ {plato.price.toLocaleString('cl-CL')}
              </div>
              <div className="botones">
                <Button className="btn btn-primary" onClick={ buscarPlato }>Ver más 👀</Button>              
                <Button className="btn btn-success" onClick={ () => agregarAlCarrito(plato) }>Agregar 🛒</Button>
              </div>
          </div>
        </div>
      }
    </div>  
  )}

  export default Cartas