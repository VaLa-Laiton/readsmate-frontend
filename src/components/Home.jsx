import { useContext } from "react";
import { ApiContext } from "../context/Context";
import { Loading } from "./Loading";
import landingImg from "../assets/landing-desing.png";

export const Home = () => {
  const { articles } = useContext(ApiContext);

  if (!articles) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <>
      <div className="container">
        <div className="d-flex">
          <div style={{ width: "50%" }} className="d-flex justify-content-center align-items-center">
            <div>
              <h1
                style={{
                  fontFamily: '"Courier Prime", monospace',
                  fontSize: "40px",
                }}
                className="mb-3"
              >
                Bienvenida/o
              </h1>
              <p
                className="fs-5"
                style={{
                  width: "85%",
                  fontFamily: '"Courier Prime", monospace',
                }}
              >
                Descubre artículos únicos creados por usuarios como tú. {<br />}
                ¡Sumérgete en el conocimiento compartido y sé parte de nuestra
                vibrante comunidad!
              </p>
            </div>
          </div>
          <div style={{ width: "50%" }}>
            <img src={landingImg} style={{ width: "100%" }} />
          </div>
        </div>
        <p className="w-75 mx-auto mt-5">
          ¡Te invito a leer un artículo especial (
          {
            <a
              href="https://docs.google.com/document/d/1ku3a9O-Q4VD5Z7dUA4Ksv_rHnB9VjD1d7ZWBQO6Y470/edit"
              target="_blank"
              rel="noopener noreferrer"
            >
              Que es READSMATE
            </a>
          }
          ), donde encontrarás todo lo que necesitas saber sobre esta web única!
          Aprende cómo publicar tus propios artículos y descubre emocionantes
          actualizaciones y futuras implementaciones planeadas especialmente
          para ti. ¡Sumérgete en el conocimiento compartido y desata todo tu
          potencial! Con mucho ❤️{" "}
          {
            <a
              href="https://www.linkedin.com/in/angel-david-v-l/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Angel David
            </a>
          }
          .{" "}
        </p>
        <div className="d-flex flex-wrap mt-3 justify-content-center">
          {articles.map((article) => (
            <div
              className="card m-2"
              key={article.articleId}
              style={{ width: "15rem" }}
            >
              <div className="card-body shadow-lg rounded">
                <h4 className="card-title">{article.title}</h4>
                <a
                  href={article.urlFile}
                  className="link-success fs-5"
                  style={{ width: "5rem" }}
                >
                  Leer
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
