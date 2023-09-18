const URL_API = import.meta.env.VITE_URL_API;
console.log(URL_API)

// SignUp
export const signupUser = async ({ nickname, email, password }) => {
  const url = `${URL_API}user/sign-up`;

  const data = {
    nickname: nickname,
    email: email,
    password: password,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(url, options);
    const dataResponse = await response.json();
    if (response.status === 200) {
      return 200;
    }
    const creationDate = Date.now();

    const dataString = JSON.stringify({
      creationDate: creationDate,
      dataResponse: dataResponse,
    });
    localStorage.setItem("dataUser", dataString);
    return true;
  } catch (error) {
    return false;
  }
};

// Login
export const loginUser = async ({ email, password }) => {
  const url = `${URL_API}user/log-in`;

  const data = {
    email: email,
    password: password,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(url, options);
    const dataResponse = await response.json();
    if (response.status === 401) {
      return 401;
    }
    if (response.status === 404) {
      return 404;
    }
    const creationDate = Date.now();

    const dataString = JSON.stringify({
      creationDate: creationDate,
      dataResponse: dataResponse,
    });
    localStorage.setItem("dataUser", dataString);
    return true;
  } catch (error) {
    return false;
  }
};

// Update User
export const updateUser = async ({
  userId,
  nickname,
  email,
  password,
  token,
}) => {
  const url = `${URL_API}/user/${userId}`;

  const data = {};

  if (nickname) {
    data.nickname = nickname;
  }
  if (email) {
    data.email = email;
  }
  if (password) {
    data.password = password;
  }

  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(url, options);
    if (response.status === 200) {
      return 200;
    }
    if (response.status === 404) {
      return 404;
    }
  } catch (error) {
    return false;
  }
};

// Delete User
export const deleteUser = async ({ userId, token }) => {
  const url = `${URL_API}user/${userId}`;

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
      return 200;
    }
    if (response.status === 404) {
      return 404;
    }
  } catch (error) {
    return false;
  }
};
