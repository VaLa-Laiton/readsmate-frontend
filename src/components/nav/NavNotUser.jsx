import { Link } from "react-router-dom";
import logoNavbar from "../../assets/nameBrand.png";

export const NavNotUser = () => {
  return (
    <>
      <nav className="shadow-lg mb-3" style={{backgroundColor: "#212A3E"}}>
        <div className="navbar navbar-expand-lg container">
          <div className="container-fluid">
            <Link className="pb-2" to={"/"}>
              <img
                src={logoNavbar}
                style={{ height: "47px" }}
                className="navbar-brand"
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active text-light"
                    aria-current="page"
                    to={"/"}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item pe-2 pb-2">
                  <Link
                    className="btn btn-outline-light"
                    aria-current="page"
                    to={"/signup"}
                  >
                    Crear cuenta
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="btn btn-outline-light"
                    aria-current="page"
                    to={"/login"}
                  >
                    Iniciar Sesión
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
