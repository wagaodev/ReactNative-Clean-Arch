export type TLoginTemplate = {
  email: string;
  password: string;
  emailError: string;
  passwordError: string;
  onChangeEmail: () => string;
  onChangePassword: () => string;
  handleSubmit: () => void;
  handleRegister: () => void;
  handleForgetPass: () => void;
  disabled: boolean;
  loading: boolean;
};
