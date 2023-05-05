import React, { useState } from 'react';

import * as S from './styles';
import { Alert } from 'react-native';

export const Login = () => {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');

  const handleAlert = (msg: string) => {
    if (password.length > 5) {
      Alert.alert(msg);
    }
  };
  return (
    <S.Login
      handleLoading={loading}
      value={password}
      onChange={(password) => setPassword(password)}
      handleSubmit={() => handleAlert('Clicou em entrar')}
      handleRegister={() => handleAlert('Clicou em registrar')}
    />
  );
};
