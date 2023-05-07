import React, { useState } from 'react';

import * as S from './styles';
import { Alert } from 'react-native';
import { createUser, TUser } from '../../store';
import { HandleError } from '../../components';

export const Login = ({ navigation }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [password, setPassword] = useState<TUser['password']>('');
  const [username, setUsername] = useState<TUser['username']>('');
  const addUser = createUser((state) => state.addUser);

  const handleSubmit = () => {
    setLoading(true);
    setDisabled(true);
    try {
      addUser({
        username,
        password,
      });
      setLoading(false);
      setDisabled(false);
    } catch (e) {
      return HandleError(e);
    }
    return navigation.navigate('Home');
  };

  const handleAlert = (msg: string) => {
    Alert.alert(msg);
  };
  return (
    <S.Login
      disabled={disabled}
      loading={loading}
      password={password}
      onChangePassword={(password) => setPassword(password)}
      username={username}
      onChangeUsername={(username) => setUsername(username)}
      handleSubmit={handleSubmit}
      handleForgetPass={() => handleAlert('Esqueceu sua senha??')}
      handleRegister={() => handleAlert('Clicou em registrar')}
    />
  );
};
