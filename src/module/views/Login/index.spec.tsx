import React from 'react';
import { render, fireEvent, RenderResult } from '@testing-library/react-native';
import { Login } from '.';
// import { createUser } from '../../store';
import { Alert } from 'react-native';

jest.mock('../../store');
jest.mock('react-native/Libraries/Alert/Alert', () => ({
  alert: jest.fn(),
}));

type TSut = {
  sut: RenderResult;
};

const makeSut = (): TSut => {
  const sut = render(<Login navigation={undefined} route={undefined} />);
  return {
    sut,
  };
};

describe('Login', () => {
  it('renders the component with initial props', () => {
    const {
      sut: { getByPlaceholderText, getByText },
    } = makeSut();

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

  it('calls handleAlert with correct message when forget password button is pressed', () => {
    const {
      sut: { getByText },
    } = makeSut();
    const forgetPassButton = getByText('Esqueci minha senha');
    fireEvent.press(forgetPassButton);

    expect(Alert.alert).toHaveBeenCalledWith('Esqueceu sua senha??');
  });

  it('calls handleAlert with correct message when register button is pressed', () => {
    const {
      sut: { getByText },
    } = makeSut();
    const registerButton = getByText(
      'Caso você ainda não tenha conta. Registrar-se aqui!',
    );
    fireEvent.press(registerButton);

    expect(Alert.alert).toHaveBeenCalledWith('Clicou em registrar');
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
});
