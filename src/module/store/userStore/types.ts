export type TUser = {
  username: string;
  password: string;
};

export interface IState {
  users: TUser[];
  addUser: (user: TUser) => void;
}
