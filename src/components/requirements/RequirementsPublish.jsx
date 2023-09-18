import React from "react";

export const RequirementsPublish = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-10 col-sm-8 col-md-6 col-lg-6">
            <h3>Requisitos para publicar un artículo</h3>
            <ol>
              <li>
                <strong>Título del artículo</strong>:
                <ul>
                  <li>Longitud mínima: 5 caracteres.</li>
                </ul>
              </li>
              <li>
                <strong>URL del artículo</strong>:
                <ul>
                  <li>Formato válido de URL de Google Docs:</li>
                  <ul>
                    <li>Debe ser una URL de Google Docs.</li>
                    <li>
                      Formato:{" "}
                      <code>
                        https://docs.google.com/document/d/{"ID_DEL_DOCUMENTO"}
                        /edit?usp=sharing
                      </code>
                    </li>
                    <li>
                      Formato alternativo:{" "}
                      <code>
                        https://docs.google.com/document/d/{"ID_DEL_DOCUMENTO"}
                        /edit
                      </code>
                    </li>
                    <li>
                      <code>{"ID_DEL_DOCUMENTO"}</code> es una cadena
                      alfanumérica.
                    </li>
                  </ul>
                </ul>
              </li>
            </ol>
            <p>
              Asegúrate de cumplir con estos requisitos antes de publicar tu
              artículo. Si el título tiene menos de 5 caracteres o la URL no
              cumple con el formato mencionado, no podrás realizar la
              publicación.
            </p>
            <p>Ejemplos de URL válidas:</p>
            <ul>
              <li>
                <a
                  href="https://docs.google.com/document/d/1ku3a9O-Q4VD5Z7dUA4Ksv_rHnB9VjD1d7ZWBQO6Y470/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://docs.google.com/document/d/1ku3a9O-Q4VD5Z7dUA4Ksv_rHnB9VjD1d7ZWBQO6Y470/edit?usp=sharing
                </a>
              </li>
              <li>
                <a
                  href="https://docs.google.com/document/d/1ku3a9O-Q4VD5Z7dUA4Ksv_rHnB9VjD1d7ZWBQO6Y470/edit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://docs.google.com/document/d/1ku3a9O-Q4VD5Z7dUA4Ksv_rHnB9VjD1d7ZWBQO6Y470/edit
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
