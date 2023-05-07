import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { LoginTemplate } from '.';

describe('LoginTemplate', () => {
  const handleSubmit = jest.fn();
  const handleRegister = jest.fn();
  const handleForgetPass = jest.fn();
  const onChangeUsername = jest.fn();
  const onChangePassword = jest.fn();

  test('renders the component with initial props', () => {
    const { getByPlaceholderText, getByText } = render(
      <LoginTemplate
        handleSubmit={handleSubmit}
        handleRegister={handleRegister}
        handleForgetPass={handleForgetPass}
        password=''
        username=''
        onChangePassword={onChangePassword}
        onChangeUsername={onChangeUsername}
        disabled={false}
        loading={false}
      />,
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

  test('calls handleSubmit when the login button is pressed', () => {
    const { getByText } = render(
      <LoginTemplate
        handleSubmit={handleSubmit}
        handleRegister={handleRegister}
        handleForgetPass={handleForgetPass}
        password='password'
        username='test@test.com'
        onChangePassword={onChangePassword}
        onChangeUsername={onChangeUsername}
        disabled={false}
        loading={false}
      />,
    );

    const loginButton = getByText('Entrar');
    fireEvent.press(loginButton);

    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });

  test('calls handleRegister when the register button is pressed', () => {
    const { getByText } = render(
      <LoginTemplate
        handleSubmit={handleSubmit}
        handleRegister={handleRegister}
        handleForgetPass={handleForgetPass}
        password='password'
        username='test@test.com'
        onChangePassword={onChangePassword}
        onChangeUsername={onChangeUsername}
        disabled={false}
        loading={false}
      />,
    );

    const registerButton = getByText(
      'Caso você ainda não tenha conta. Registrar-se aqui!',
    );
    fireEvent.press(registerButton);

    expect(handleRegister).toHaveBeenCalledTimes(1);
  });

  test('calls handleForgetPass when the forget password button is pressed', () => {
    const { getByText } = render(
      <LoginTemplate
        handleSubmit={handleSubmit}
        handleRegister={handleRegister}
        handleForgetPass={handleForgetPass}
        password='password'
        username='test@test.com'
        onChangePassword={onChangePassword}
        onChangeUsername={onChangeUsername}
        disabled={false}
        loading={false}
      />,
    );

    const forgetPassButton = getByText('Esqueci minha senha');
    fireEvent.press(forgetPassButton);

    expect(handleForgetPass).toHaveBeenCalledTimes(1);
  });
});
