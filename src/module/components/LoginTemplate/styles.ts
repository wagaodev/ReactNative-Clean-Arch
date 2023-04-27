import styled from 'styled-components/native';
import { Dimensions, Image, TextInput } from 'react-native';
import { theme } from '../../../global';

const height = Dimensions.get('screen').height;
const image =
  'https://o.remove.bg/downloads/b7875370-7f55-4ebe-b103-5f1549952243/gaming-logo-cover-removebg-preview.png';

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
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px 16px;
  margin-bottom: 16px;
`;

export const LoginButton = styled.TouchableOpacity`
  background-color: ${theme.colors.system.green1};
  border-radius: 4px;
  padding: 8px 16px;
  margin-bottom: 16px;
`;

export const LoginButtonText = styled.Text`
  color: ${theme.colors.system.background};
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

export const Logo = styled(Image).attrs({
  source: {
    uri: image,
  },
  height: 200,
  width: 200,
})``;
