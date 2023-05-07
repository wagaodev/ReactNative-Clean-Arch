import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Login } from '.';
// import { createUser } from '../../store';
import { Alert } from 'react-native';

jest.mock('../../store');
jest.mock('react-native/Libraries/Alert/Alert', () => ({
  alert: jest.fn(),
}));

describe('Login', () => {
  it('renders the component with initial props', () => {
    const { getByPlaceholderText, getByText } = render(
      <Login navigation={undefined} route={undefined} />,
    );

    const emailInput = getByPlaceholderText('E-mail');
    const passwordInput = getByPlaceholderText('Password');
    const loginButton = getByText('Entrar');
    const forgetPassButton = getByText('Esqueci minha senha');
    const registerButton = getByText(
      'Caso você ainda não tenha conta. Registrar-se aqui!',
    );

    expect(emailInput).toBeDefined();
    expect(passwordInput).toBeDefined();
    expect(loginButton).toBeDefined();
    expect(forgetPassButton).toBeDefined();
    expect(registerButton).toBeDefined();
  });

  // it('calls addUser and navigates to Home screen when login button is pressed', async () => {
  //   const addUser = jest.fn();
  //   createUser.mockReturnValue({
  //     addUser,
  //   });
  //   const navigation = {
  //     navigate: jest.fn(),
  //   };
  //   const { getByText, getByPlaceholderText } = render(
  //     <Login navigation={navigation} />,
  //   );
  //   const emailInput = getByPlaceholderText('E-mail');
  //   const passwordInput = getByPlaceholderText('Password');
  //   const loginButton = getByText('Entrar');

  //   fireEvent.changeText(emailInput, 'test@test.com');
  //   fireEvent.changeText(passwordInput, 'password');
  //   fireEvent.press(loginButton);

  //   expect(addUser).toHaveBeenCalledWith({
  //     username: 'test@test.com',
  //     password: 'password',
  //   });
  //   expect(navigation.navigate).toHaveBeenCalledWith('Home', {
  //     username: 'test@test.com',
  //   });
  // });

  it('calls handleAlert with correct message when forget password button is pressed', () => {
    const { getByText } = render(
      <Login navigation={undefined} route={undefined} />,
    );
    const forgetPassButton = getByText('Esqueci minha senha');
    fireEvent.press(forgetPassButton);

    expect(Alert.alert).toHaveBeenCalledWith('Esqueceu sua senha??');
  });

  it('calls handleAlert with correct message when register button is pressed', () => {
    const { getByText } = render(
      <Login navigation={undefined} route={undefined} />,
    );
    const registerButton = getByText(
      'Caso você ainda não tenha conta. Registrar-se aqui!',
    );
    fireEvent.press(registerButton);

    expect(Alert.alert).toHaveBeenCalledWith('Clicou em registrar');
  });
});
