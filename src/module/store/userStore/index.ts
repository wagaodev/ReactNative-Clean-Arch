import { create } from 'zustand';
import { IState, TUser } from './types';

export const createUser = create<IState>((set) => ({
  users: [],

  addUser: (user: TUser) => {
    set((state) => ({
      users: [...state.users, user],
    }));
  },
}));
