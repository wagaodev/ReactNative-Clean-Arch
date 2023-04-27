import React, { useState } from 'react';
import { Alert, Text, TouchableOpacity } from 'react-native';

import * as S from './styles';

export interface SocialLoginButtonProps {
  iconName: string;
  text: string;
  color: string;
}

export const Login = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleRegisterPress = () => {
    // Implementar o redirecionamento para a página de registro
    console.log('Botão Registrar-se pressionado');
  };

  return (
    <S.LoginContainer>
      <S.LoginForm>
        <S.LoginInput placeholder='E-mail' placeholderTextColor='red' />
        <S.LoginInput
          secureTextEntry={!showPassword}
          placeholderTextColor='red'
          placeholder='Password'
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <S.LoginButton>
          <S.LoginButtonText>Entrar</S.LoginButtonText>
        </S.LoginButton>
        <S.SocialLoginButton
          color='#4267B2'
          text='Login with Apple'
          onPress={() => {}}
        >
          <S.SocialLoginButtonText>Login with Facebook</S.SocialLoginButtonText>
        </S.SocialLoginButton>
        <S.SocialLoginButton
          color='#DB4437'
          text='Login with Google'
          onPress={() => {}}
        >
          <S.SocialLoginButtonText>Login with Google</S.SocialLoginButtonText>
        </S.SocialLoginButton>

        <TouchableOpacity>
          <Text>Esqueci minha senha</Text>
        </TouchableOpacity>

        <S.RegisterButton onPress={handleRegisterPress}>
          <S.RegisterButtonText>Registrar-se</S.RegisterButtonText>
        </S.RegisterButton>
      </S.LoginForm>
    </S.LoginContainer>
  );
};
