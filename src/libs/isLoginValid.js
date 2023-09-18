import {isEmailValid, isPasswordValid} from './isSignupValid'

export const isLoginValid = ({email, password}) => {
  const isEmailValidResult = isEmailValid(email);
  const isPasswordValidResult = isPasswordValid(password);

  return isEmailValidResult && isPasswordValidResult;
}