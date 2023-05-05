import React, { useState } from 'react';

import * as S from './styles';
import { Alert } from 'react-native';

export const Login = () => {
  const [password, setPassword] = useState('');
  return (
    <S.Login
      value={password}
      onChange={(password) => setPassword(password)}
      onSubmit={() => Alert.alert('Clicou')}
    />
  );
};
