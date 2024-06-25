import { Route, Routes } from "react-router-dom";
import Detalle from "./views/Detalle.jsx";
import PedidoCarrito from "./views/PedidoCarrito.jsx";
import Home from "./views/Home.jsx";
import NotFound from "./views/NotFound.jsx";




const App = () => {
  return (
    <div>
      <Routes>
        <Route path="pizzas/">
          <Route path=":id" element={<Detalle />} />
        </Route>

        <Route path="/" element={<Home />} />
        <Route path="/carrito" element={<PedidoCarrito />} />
        <Route path="*" element={<NotFound />} />

        
      </Routes>
    </div>
  );
};
export default App;