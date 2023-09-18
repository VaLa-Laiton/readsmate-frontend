export const automaticLogout = () => {
  const datosGuardados = localStorage.getItem("dataUser");

  if (datosGuardados) {
    const { creationDate } = JSON.parse(datosGuardados);
    const currentDate = Date.now();
    const expirationDate = 70 * 60 * 60 * 1000; // 70 horas en milisegundos

    if (currentDate - creationDate > expirationDate) {
      localStorage.removeItem("dataUser");
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
