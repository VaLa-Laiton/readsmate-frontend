import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ApiContext } from "../../context/Context";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  isNicknameValid,
  isEmailValid,
  isPasswordValid,
} from "../../libs/isSignupValid";

export const UpdateProfile = ({ userId, token }) => {
  const { setUser, updateUser } = useContext(ApiContext);
  const navigate = useNavigate();

  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState();

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (nickname) {
      if (isNicknameValid(nickname) === false) {
        setErrorMessage(
          <Link className="btn btn-link" to={"/requirements"}>
            No cumples con los requisitos 😟
          </Link>
        );
        return false;
      }
    }
    if (email) {
      if (isEmailValid(email) === false) {
        setErrorMessage(
          <Link className="btn btn-link" to={"/requirements"}>
            No cumples con los requisitos 😟
          </Link>
        );
        return false;
      }
    }
    if (password) {
      if (isPasswordValid(password) === false) {
        setErrorMessage(
          <Link className="btn btn-link" to={"/requirements"}>
            No cumples con los requisitos 😟
          </Link>
        );
        return false;
      }
    }

    const response = await updateUser({
      userId,
      nickname,
      email,
      password,
      token,
    });

    if (response === 200) {
      setUser();
      localStorage.removeItem("dataUser");
      navigate("/");
    }
  };

  return (
    <>
      <form className="container" onSubmit={handleUpdate}>
        <div className="row">
          <div className="col-10 col-sm-8 ">
            <h2>Actaulizar datos 📑</h2>
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
              Actualizar cuenta
            </button>
            <div className="mt-3">{errorMessage}</div>
          </div>
        </div>
      </form>
    </>
  );
};

UpdateProfile.propTypes = {
  userId: PropTypes.number,
  token: PropTypes.string,
};
