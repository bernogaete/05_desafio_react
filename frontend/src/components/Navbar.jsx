import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar = ({ setCurrentView, total }) => {
  const token = false;

  return (
    <div className="barra">
      <div className="d-flex align-items-center justify-content-between w-100">
        {/* Alineamos todos los elementos en una sola línea */}
        <p className="mb-0">Pizzería Mamma Mía!</p>

        <div className="d-inline-flex gap-2">
          <Link to="/">
            <Button className="btn-nav">Home</Button>
          </Link>

          {token ? (
            <Link to="/profile">
              <Button className="btn-nav">👤 Perfil</Button>
            </Link>
          ) : (
            <>
              <Link to="/login">
                <Button className="btn-nav">🔐 Login</Button>
              </Link>
              <Link to="/register">
                <Button className="btn-nav">🔐 Register</Button>
              </Link>
              <Link to="/cart">
                <Button className="btn-nav">🛒 Cart</Button>
              </Link>
              <Link to="/404">
                <Button className="btn-nav">404 Not Found</Button>
              </Link>
            </>
          )}
        </div>

        <div className="d-flex gap-2 ms-auto">
          <Link 
            to="/cart" 
            className="btn btn-outline-primary d-flex align-items-center" 
            style={{ fontSize: "small", backgroundColor: "#f8f9fa" }}
          >
            🛒 Total: ${total.toLocaleString()} &nbsp;|&nbsp; Pagar
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
