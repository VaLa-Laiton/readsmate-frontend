import { useContext } from "react";
import { ApiContext } from "../../context/Context";
import { Loading } from "../Loading";
import { UpdateProfile } from "./UpdateProfile";
import { DeleteProfile } from "./DeleteProfile";

export const Profile = () => {
  const { user } = useContext(ApiContext);

  if (!user || !user.dataResponse) {
    return (
      <>
        <Loading />
      </>
    );
  }
  const dataUser = user.dataResponse;

  return (
    <>
      <div className="container">
        <div className="row">
          <h1>Perfil 😇</h1>
          <div className="col">
            <h3 className="mt-5 ms-4">🩻 {dataUser.nickname}</h3>
            <h5 className="mt-3 ms-4">📧 {dataUser.email}</h5>
            <DeleteProfile userId={dataUser.userId} token={dataUser.token} />
          </div>
          <div className="col mt-5">
            <UpdateProfile userId={dataUser.userId} token={dataUser.token} />
          </div>
        </div>
      </div>
    </>
  );
};
