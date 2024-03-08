import { useContext } from 'react';
import { RestauranteContext } from '../../context/RestauranteContext';
import Cartas from '../cartas/Cartas';
import Buscando from '../buscando/Buscando';
import Header from "../header/Header";
import Footer from '../../components/footer/Footer';
import './Home.css';

const RestauranteHome = () => {
  const { platos } = useContext(RestauranteContext);

  return (
    <div className="home">
      <Header />
      <section className="cartas">
        {platos.length ? platos.map((plato, indice) => <Cartas key={indice} plato={plato} />) : <Buscando />}
      </section>
      <Footer />
    </div>
  );
};

export default RestauranteHome;
