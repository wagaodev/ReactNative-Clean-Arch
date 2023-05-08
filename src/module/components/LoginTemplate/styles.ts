import styled from 'styled-components/native';
import { Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { theme } from '../../../global';

const height = Dimensions.get('screen').height;

export const LoginContainer = styled.View`
  flex: 1;
  background-color: ${theme.colors.system.logo};
  padding: 20px 0;
`;

export const ContainerLogo = styled.View`
  justify-content: center;
  align-items: center;
`;

export const LoginForm = styled.View`
  flex: 1;
  padding: 32px;
`;

export const LoginTitle = styled.Text`
  font-size: 24px;
  margin-bottom: 16px;
`;

export const LoginInput = styled(TextInput).attrs({
  placeholderTextColor: 'gray',
  autoCapitalize: 'none',
})`
  border: 1px solid ${theme.colors.base.gray300};
  border-radius: 4px;
  padding: 8px 16px;
  margin-bottom: 16px;
  color: ${theme.colors.base.white};
`;

export const ValidationError = styled.Text`
  color: red;
  font-size: 12px;
  margin-top: 2px;
  margin-bottom: 10px;
`;

export const LoginButton = styled(TouchableOpacity)<{ disabled: boolean }>`
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  background-color: ${theme.colors.transparency.dark50};
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
`;

export const LoginButtonText = styled.Text`
  font-size: 18px;
  color: ${theme.colors.system.green1};
  align-self: center;
`;

export const ForgetPassContainer = styled.TouchableOpacity``;

export const ForgetPassText = styled.Text`
  color: ${theme.colors.system.background};
`;

export const RegisterButton = styled.TouchableOpacity`
  padding: 10px;
  margin-bottom: ${height * 0.05}px;
`;

export const RegisterButtonText = styled.Text`
  color: ${theme.colors.system.green1};
`;
