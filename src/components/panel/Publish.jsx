import { useContext, useState } from "react";
import { ApiContext } from "../../context/Context";
import { isArticleValid } from "../../libs/isArticleValid";
import { RequirementsPublish } from "../requirements/RequirementsPublish";
import { Loading } from "../Loading";
import { UserArticles } from "./UserArticles";

export const Publish = () => {
  const { user, createArticle, setPublish } = useContext(ApiContext);

  const [title, setTitle] = useState();
  const [urlFile, setUrlFile] = useState();
  const [errorMessage, setErrorMessage] = useState();

  if (!user || !user.dataResponse) {
    return (
      <>
        <Loading />
      </>
    );
  }
  const token = user.dataResponse.token;

  const handlePublish = async (e) => {
    e.preventDefault();

    if (isArticleValid(urlFile) === true) {
      const response = await createArticle({ title, urlFile, token });
      setTitle("");
      setUrlFile("");
      if (response === 201) {
        setErrorMessage(
          "Felicidades, has publicado tu artículo exitosamente 🥳"
        );
        setPublish(true);
      } else {
        setErrorMessage(
          "Ha ocurrido un error, por favor vuelve a intentarlo 😥"
        );
      }
    } else {
      setErrorMessage(
        "No cumples con los requisitos para publicar tu artículo 😑"
      );
    }
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6 col-sm-4">
            <form onSubmit={handlePublish}>
              <h2>Publica un articulo 📝</h2>
              <div className="mb-3">
                <label htmlFor="exampleInputTitle" className="form-label">
                  Titulo
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputTitle"
                  aria-describedby="TitleHelp"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputURL" className="form-label">
                  URL del articulo
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputURL"
                  aria-describedby="URLHelp"
                  onChange={(e) => setUrlFile(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Publicar
              </button>
              <div className="mt-3">{errorMessage}</div>
            </form>
          </div>
          <div className="col-6">
            <UserArticles />
          </div>
        </div>
      </div>
      <RequirementsPublish />
    </>
  );
};
