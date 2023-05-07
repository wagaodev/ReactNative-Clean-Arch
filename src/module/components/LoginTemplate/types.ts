export type TLoginTemplate = {
  username: string;
  password: string;
  onChangeUsername: () => string;
  onChangePassword: () => string;
  handleSubmit: () => void;
  handleRegister: () => void;
  handleForgetPass: () => void;
  disabled: boolean;
  loading: boolean;
};
