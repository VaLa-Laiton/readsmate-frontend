import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ApiContext } from "../../context/Context";
import { isSignupValid } from "../../libs/isSignupValid";
import { Requirements } from "../requirements/Requirements";

export const SingUp = () => {
  const { setUser, signupUser } = useContext(ApiContext);
  const navigate = useNavigate();

  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (isSignupValid({ nickname, email, password }) === true) {
      const response = await signupUser({ nickname, email, password });
      if (response === 200) {
        setErrorMessage("El usuario ya existe 😶");
      }
      if (response === true) {
        setUser(JSON.parse(localStorage.getItem("dataUser")));
        navigate("/");
      }
    } else {
      setErrorMessage("No cumples con los requisitos para el registro.");
    }
  };

  return (
    <>
      <form className="container" onSubmit={handleSignup}>
        <div className="row">
          <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto">
            <div className="mb-3">
              <label htmlFor="exampleInputNickname" className="form-label">
                Nickname
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputNickname"
                aria-describedby="nicknamelHelp"
                onChange={(e) => setNickname(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Correo electrónico
              </label>
              <input
                type="text"
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
              Crear cuenta
            </button>
            <div className="mt-3">{errorMessage}</div>
          </div>
        </div>
      </form>

      <Requirements />
    </>
  );
};
