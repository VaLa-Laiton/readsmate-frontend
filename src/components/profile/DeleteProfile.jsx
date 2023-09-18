import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ApiContext } from "../../context/Context";
import PropTypes from "prop-types";

export const DeleteProfile = ({ userId, token }) => {
  const { setUser, deleteUser } = useContext(ApiContext);
  const navigate = useNavigate();

  const handleDelete = async (e) => {
    e.preventDefault();

    const response = await deleteUser({
        userId,
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
      <button
        type="button"
        className="btn btn-warning mt-3 ms-4"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Eliminar cuenta
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                ¿Estas segur@ de eliminar tu cuenta 🤔?
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Si eliminas tu cuenta no podras recuperarla... 😥
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success"
                data-bs-dismiss="modal"
              >
                No, no quiero 😘.
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleDelete}
                data-bs-dismiss="modal"
              >
                Si, si quiero 😶.
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DeleteProfile.propTypes = {
  userId: PropTypes.number,
  token: PropTypes.string,
};
