import React, { useState } from 'react';
import { TLoginTemplate } from './types';

import * as S from './styles';

export const LoginTemplate = ({
  handleSubmit,
  handleRegister,
  handleForgetPass,
}: TLoginTemplate) => {
  const [password, setPassword] = useState('');

  return (
    <S.LoginContainer>
      <S.ContainerLogo>
        <S.Logo />
      </S.ContainerLogo>
      <S.LoginForm>
        <S.LoginInput placeholder='E-mail' />
        <S.LoginInput
          secureTextEntry
          placeholder='Password'
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <S.LoginButton onPress={handleSubmit}>
          <S.LoginButtonText>Entrar</S.LoginButtonText>
        </S.LoginButton>

        <S.ForgetPassContainer onPress={handleForgetPass}>
          <S.ForgetPassText>Esqueci minha senha</S.ForgetPassText>
        </S.ForgetPassContainer>
      </S.LoginForm>
      <S.RegisterButton onPress={handleRegister}>
        <S.RegisterButtonText>
          Caso você ainda não tenha conta. Registrar-se aqui!
        </S.RegisterButtonText>
      </S.RegisterButton>
    </S.LoginContainer>
  );
};
