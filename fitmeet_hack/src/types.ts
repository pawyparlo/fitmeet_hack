export interface UserCredentialProps {
  userName: string;
  userPassword: string;
}

export interface UserRegisterCredentialProps extends UserCredentialProps {
  userConfirmPassword: string;
  email: string;
}
