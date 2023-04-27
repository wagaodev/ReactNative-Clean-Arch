import styled from 'styled-components/native';
import { SocialLoginButtonProps } from '.';

export const LoginContainer = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const LoginForm = styled.View`
  flex: 1;
  padding: 32px;
  border-radius: 4px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

export const LoginTitle = styled.Text`
  font-size: 24px;
  margin-bottom: 16px;
`;

export const LoginInput = styled.TextInput`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px 16px;
  margin-bottom: 16px;
`;

export const LoginButton = styled.TouchableOpacity`
  background-color: #007bff;
  border-radius: 4px;
  padding: 8px 16px;
  margin-bottom: 16px;
`;

export const LoginButtonText = styled.Text`
  color: #fff;
`;

export const LoginSecondaryButton = styled.TouchableOpacity`
  border: 1px solid #007bff;
  border-radius: 4px;
  padding: 8px 16px;
  margin-bottom: 16px;
`;

export const LoginSecondaryButtonText = styled.Text`
  color: #007bff;
`;

export const LoginLogo = styled.Image`
  width: 200px;
  height: 200px;
  margin-bottom: 32px;
`;

export const RememberMeContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const RememberMeText = styled.Text`
  margin-right: 8px;
`;

export const RegisterButton = styled.TouchableOpacity`
  border: 1px solid #007bff;
  border-radius: 4px;
  padding: 8px 16px;
`;

export const RegisterButtonText = styled.Text`
  color: #007bff;
`;

export const SocialLoginButton = styled.TouchableOpacity<SocialLoginButtonProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background-color: ${(props) => props.color};
  border-radius: 8px;
  margin-bottom: 16px;
`;

export const SocialLoginButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  margin-left: 8px;
`;
