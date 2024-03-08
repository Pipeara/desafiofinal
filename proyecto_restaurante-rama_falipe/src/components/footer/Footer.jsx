import { useContext } from 'react'
import { RestauranteContext } from '../../context/RestauranteContext';
import Button from 'react-bootstrap/Button'

import Form from "react-bootstrap/Form";


const Footer = () => {
  const { limpiarElCarrito, total, pagar } = useContext(RestauranteContext);

  const enviarComentario = () => {
    alert("Gracias por ayudarnos a mejorar");
  }

  return (
  <div className="bg-dark text-light p-3 text-center">
    <p className='fs-3 fw-bold'>Prestorante</p>
    {total > 0 ? (
    <div>
      <p className='fs-5 fw-bold'>El total de su compra es: ${total.toLocaleString('cl-CL')}</p>
      <Button variant="success" onClick={() => pagar()}>Pagar</Button>
      <Button variant='danger' onClick={() => limpiarElCarrito()}>Limpiar el carrito</Button>
    </div>) : ('')}
    <Form className='p-2' >
      <Form.Group className='m-2'>
        <Form.Label>Déjenos su comentario</Form.Label>
        <Form.Control as='textarea' type='text' rows={3} />
      </Form.Group>
      <Button variant='primary' type='submit' onClick={() => enviarComentario()}>Enviar Comentario</Button>
    </Form>
  </div>
  )
}

export default Footer;