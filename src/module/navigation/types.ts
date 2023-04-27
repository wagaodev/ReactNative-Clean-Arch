import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Starter: undefined;
  Login: undefined;
};

export type TStarter = NativeStackScreenProps<RootStackParamList, 'Starter'>;
export type TLogin = NativeStackScreenProps<RootStackParamList, 'Login'>;
