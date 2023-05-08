export type TUser = {
  email: string;
  password: string;
};

export interface IState {
  users: TUser[];
  addUser: (user: TUser) => void;
}
