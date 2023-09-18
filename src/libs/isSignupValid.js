const nicknameRegex = /^[a-zA-Z0-9_]{4,}$/;
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*?&_-]{8,}$/;

export const isNicknameValid = (nickname) => {
  return nicknameRegex.test(nickname);
};

export const isEmailValid = (email) => {
  return emailRegex.test(email);
};

export const isPasswordValid = (password) => {
  return passwordRegex.test(password);
};

export const isSignupValid = ({ nickname, email, password }) => {
  const isNicknameValidResult = isNicknameValid(nickname);
  const isEmailValidResult = isEmailValid(email);
  const isPasswordValidResult = isPasswordValid(password);

  return isNicknameValidResult && isEmailValidResult && isPasswordValidResult;
};
