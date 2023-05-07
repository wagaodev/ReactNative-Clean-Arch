import React, { useState } from 'react';

import * as S from './styles';
import { Alert } from 'react-native';

export const Login = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');

  const handleAlert = (msg: string) => {
    Alert.alert(msg);
  };
  return (
    <S.Login
      disabled={disabled}
      loading={loading}
      value={password}
      onChange={(password) => setPassword(password)}
      handleSubmit={() => handleAlert('Clicou em entrar')}
      handleForgetPass={() => handleAlert('Esqueceu sua senha??')}
      handleRegister={() => handleAlert('Clicou em registrar')}
    />
  );
};
