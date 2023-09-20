import { useContext } from "react";
import { Link } from "react-router-dom";
import { ApiContext } from "../../context/Context";
import logoNavbar from "../../assets/nameBrand.png";

export const NavUser = () => {
  const { setUser } = useContext(ApiContext);

  const logoutUser = () => {
    setUser();
    localStorage.removeItem("dataUser");
  };

  return (
    <>
      <nav className="shadow-lg mb-3" style={{backgroundColor: "#212A3E"}}>
        <div className="navbar navbar-expand-lg container navbar-dark">
          <div className="container-fluid">
            <Link className="pb-2" to={"/"}>
              <img
                src={logoNavbar}
                style={{ height: "40px" }}
                className="navbar-brand"
              />
            </Link>
            <button
              style={{ marginTop: "-9px" }}
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
                <li className="nav-item">
                  <Link
                    className="nav-link active text-light"
                    aria-current="page"
                    to={"/panel"}
                  >
                    Panel
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active text-light"
                    aria-current="page"
                    to={"/profile"}
                  >
                    Perfil
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="btn btn-outline-light"
                    aria-current="page"
                    to={"/"}
                    onClick={() => logoutUser()}
                  >
                    Cerrar Sesión
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
