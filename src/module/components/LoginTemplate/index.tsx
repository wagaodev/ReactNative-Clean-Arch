import React, { useState } from 'react';
import { TLoginTemplate } from './types';

import { Logo } from '../../assets/svg';

import * as S from './styles';

export const LoginTemplate = ({
  handleSubmit,
  handleRegister,
  handleForgetPass,
  value,
  onChange,
}: TLoginTemplate) => {
  const [showPassword, setShowPassword] = useState(false);
  const isHidden = () => {
    setShowPassword(!showPassword);
  };
  return (
    <S.LoginContainer>
      <S.ContainerLogo>
        <Logo width='300' height='300' />
      </S.ContainerLogo>
      <S.LoginForm>
        <S.LoginInput placeholder='E-mail' />
        <S.LoginInput
          secureTextEntry={isHidden}
          placeholder='Password'
          value={value}
          onChangeText={onChange}
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
