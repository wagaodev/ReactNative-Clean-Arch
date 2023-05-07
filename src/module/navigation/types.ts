import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
};

export type TStarter = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type TLogin = NativeStackScreenProps<RootStackParamList, 'Login'>;
