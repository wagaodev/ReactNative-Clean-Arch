export type TLoginTemplate = {
  value: string;
  onChange: () => string;
  handleSubmit: () => void;
  handleRegister: () => void;
  handleForgetPass: () => void;
  handleLoading: boolean;
  disabled: boolean;
};
