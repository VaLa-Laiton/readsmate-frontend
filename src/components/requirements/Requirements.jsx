import React from "react";

export const Requirements = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 mx-auto">
            <h3>Requisitos para registrarte:</h3>
            <ul>
              <li>
                El nickname debe tener al menos 4 caracteres y puede contener
                letras (mayúsculas y minúsculas), números y guiones bajos.
              </li>
              <li>
                El email debe ser válido y seguir el formato
                usuario@dominio.com.
              </li>
              <li>
                La contraseña debe tener al menos 8 caracteres y contener al
                menos una letra mayúscula, una letra minúscula y un número.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
