import { useContext } from "react";
import { ApiContext } from "../../context/Context";
import { Loading } from "../Loading";

export const UserArticles = () => {
  const { user, articles, deleteArticle, setPublish } = useContext(ApiContext);
  const Id = user.dataResponse.userId;
  const token = user.dataResponse.token;

  if (!user || !articles) {
    return (
      <>
        <Loading />
      </>
    );
  }

  const handleDelete = async (article) => {
    let articleId = article.articleId;
    const response = await deleteArticle({ articleId, token });
    if (response === true) {
      setPublish(true)
    }
  };

  const filteredArticles = articles.filter((article) => article.userId === Id);
  return (
    <>
      <h2>Estos son tus articulos... 🥳</h2>
      <div className="d-flex flex-wrap">
        {filteredArticles.map((article) => (
          <div
            className="card m-2"
            key={article.articleId}
            style={{ width: "15rem" }}
          >
            <div className="card-body shadow-lg rounded">
              <h4 className="card-title">{article.title}</h4>
              <div className="d-flex justify-content-between">
                <a
                  href={article.urlFile}
                  className="link-success fs-5"
                  style={{ width: "5rem" }}
                >
                  Leer
                </a>
                <button onClick={() => handleDelete(article)} className="btn btn-danger btn-sm">
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
