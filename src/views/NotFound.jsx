import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFound text-center">
      <h1>Bienvenidos Pizza Lovers</h1>
      <img src="https://m.media-amazon.com/images/I/61JUKPlmpsS._AC_UF894,1000_QL80_.jpg" alt="" width={800} />
      <Link className="volver-inicio" to="/">
        Click para ir al Inicio
      </Link>
    </div>
  );
};

export default NotFound;