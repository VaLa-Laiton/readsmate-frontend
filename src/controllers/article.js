const URL_API =
  import.meta.env.VITE_URL_API ||
  "https://readsmate-restapi-production.up.railway.app/api/";

export const getArticles = async () => {
  const url = `${URL_API}article`;

  const options = {
    method: "GET",
  };

  try {
    const response = await fetch(url, options);
    if (response.status === 200) {
      return JSON.stringify(await response.json());
    }
  } catch (error) {
    return false;
  }
};

export const createArticle = async ({ title, urlFile, token }) => {
  const url = `${URL_API}article`;

  const data = {
    title: title,
    urlFile: urlFile,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
    body: JSON.stringify(data),
  };
  try {
    const response = await fetch(url, options);
    if (response.status === 201) {
      return 201;
    }
  } catch (error) {
    return false;
  }
};

export const deleteArticle = async ({ articleId, token }) => {
  const url = `${URL_API}article/${articleId}`;

  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
  };

  try {
    const response = await fetch(url, options);
    if (response.status === 200) {
      return true;
    }
  } catch (error) {
    return false;
  }
};
