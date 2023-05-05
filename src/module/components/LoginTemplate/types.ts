export type TLoginTemplate = {
  value: string;
  onChange: () => string;
  handleSubmit: () => Promise<void>;
  handleRegister: () => void;
  handleForgetPass: () => void;
};
