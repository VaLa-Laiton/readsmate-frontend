import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ApiContext } from "../../context/Context";
import { isLoginValid } from "../../libs/isLoginValid";

export const Login = () => {
  const { setUser, loginUser } = useContext(ApiContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (isLoginValid({ email, password }) === true) {
      const response = await loginUser({ email, password });
      if (response === 401) {
        setErrorMessage("Constraseña incorrecta 🚫");
      }
      if (response === 404) {
        setErrorMessage("Usuario no encontrado ❓");
      }
      if (response === true) {
        setUser(JSON.parse(localStorage.getItem("dataUser")));
        navigate("/");
      }
    } else {
      setErrorMessage("Ingresa correctamente los datos.");
    }
  };

  return (
    <>
      <form className="container" onSubmit={handleLogin}>
        <div className="row">
          <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Correo electrónico
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div id="emailHelp" className="form-text">
                Por favor, recuerda tu contraseña ya que la recuperación de la
                cuenta no será posible en caso de que olvides las credenciales.
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Iniciar Sesión
            </button>
            <div className="mt-3">{errorMessage}</div>
          </div>
        </div>
      </form>
    </>
  );
};
