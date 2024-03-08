import { useContext, useEffect } from 'react'
import Button from 'react-bootstrap/Button';

import { RestauranteContext } from '../../context/RestauranteContext'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'

import './detalleDelPlato.css';
// import '../../components/home/RestauranteHome';

const PlatoDetalle = () => {
  const { id } = useParams();

  const navigateRestaurante = useNavigate();
  const { platos, agregarAlCarrito } = useContext(RestauranteContext);

  useEffect(() => {
    const encontrarPlato = platos.find(plato => plato.id === id);

    if(!encontrarPlato) {    
      return (
        navigateRestaurante('/')
      )
    }
  }, [id]);

  const platoIndex = platos.findIndex(e => e.id === id);

  const detalleDelPlato = platos[platoIndex];

  return (
    <div>
      {/* <h1>{encontrarPizza ? <div>El pizza está bien</div> : undefined}</h1> */}
      {detalleDelPlato ? (
        <section className='detalles mt-5 pt-3 bg-primary'>
          <img src={detalleDelPlato.img} style={{width: '100%'}}></img>
          <div>
            <div className='h1'>{detalleDelPlato.name.charAt(0).toUpperCase() + detalleDelPlato.name.slice(1)}</div>
            <p className='description'>
              { detalleDelPlato.desc }
            </p>
            <p className='fs-4 fw-bold text-start'>
              Ingredientes:
            </p>
            <ul>
              { detalleDelPlato.ingredients.map( (ingrediente, index) => <li key={index}>{ingrediente}</li> ) }
            </ul>
            <section className='d-flex justify-content-around'>
              <p className='fs-1 fw-bold'>
                Precio: $ { detalleDelPlato.price.toLocaleString('cl-CL') }
              </p>
              <p>
                <Button className='btn btn-success' onClick={() => agregarAlCarrito(detalleDelPlato)}>
                  Agregar 🛒
                </Button>
              </p>
              <p>
                <Button className='btn btn-primary' onClick={() => navigateRestaurante('/')}>
                  Volver a 🏡
                </Button>
              </p>
            </section>
          </div>
        </section>) : undefined }
    </div>
  )
}

export default PlatoDetalle;