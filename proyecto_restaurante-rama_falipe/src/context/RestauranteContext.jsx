import { createContext, useState, useEffect } from 'react';

export const RestauranteContext = createContext({});

const RestauranteProvider = ({ children }) => {
  const [platos, setPlatos] = useState([]); // Maneja la petición a platos.json
  const [carrito, setCarrito] = useState([]); // Maneja los estados del carrito
  const [total, setTotal] = useState(0); // Da el valor a pagar
  const [contador, setContador] = useState(0); // Contador del total de productos

  const getPlatos = async () => {
    try {
      const response = await fetch("/pizzas.json");
      const data = await response.json();
      setPlatos(data);
    } catch (error) {
      console.error("Error al obtener los platos:", error);
    }
  };

  useEffect(() => {
    getPlatos();
  }, []);

  const agregarAlCarrito = (plato) => {
    const existePlato = carrito.find((item) => item.id === plato.id);
    if (!existePlato) {
      setCarrito([...carrito, { ...plato, cantidad: 1 }]);
      setTotal(total + plato.price);
      setContador(contador + 1);
    } else {
      existePlato.cantidad += 1;
      setContador(contador + 1);
      setCarrito([...carrito]);
      setTotal(total + plato.price);
    }
  };

  const quitarDelCarrito = (id) => {
    const actualizarCarrito = carrito.map((item) => {
      if (item.id === id) {
        const actualizarItem = { ...item, cantidad: item.cantidad - 1 };
        setContador(contador - 1);
        setTotal(total - item.price);
        return actualizarItem;
      }
      return item;
    }).filter((item) => item.cantidad > 0);
    setCarrito(actualizarCarrito);
  };

  const limpiarElCarrito = () => {
    setCarrito([]);
    setTotal(0);
    setContador(0);
  };

  const pagar = () => {
    setCarrito([]);
    setTotal(0);
    setContador(0);
    alert('Gracias por su compra');
  };

  const agregarPlato = () => {
    const nuevoPlato = { id: Math.random().toString(36).substring(7), nombre: "Nuevo Plato", descripcion: "Descripción del nuevo plato" };
    setPlatos([...platos, nuevoPlato]);
    console.log('Plato agregado:', nuevoPlato);
  };

  return (
    <RestauranteContext.Provider value={{ platos, carrito, total, contador, getPlatos, agregarAlCarrito, quitarDelCarrito, limpiarElCarrito, pagar, agregarPlato }}>
      { children }
    </RestauranteContext.Provider>
  );
};

export default RestauranteProvider;
