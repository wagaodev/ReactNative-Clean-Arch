import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { LoginTemplate } from '.';

describe('LoginTemplate', () => {
  const handleSubmit = jest.fn();
  const handleRegister = jest.fn();
  const handleForgetPass = jest.fn();
  const onChangePassword = jest.fn();
  const onChangeEmail = jest.fn();

  const defaultProps = {
    handleSubmit,
    handleRegister,
    handleForgetPass,
    password: '',
    email: '',
    onChangePassword,
    onChangeEmail,
    disabled: false,
    loading: false,
    emailError: '',
    passwordError: '',
  };

  it('renders correctly', () => {
    const { getByPlaceholderText, getByText } = render(
      <LoginTemplate {...defaultProps} />,
    );

    expect(getByPlaceholderText('E-mail')).toBeTruthy();
    expect(getByPlaceholderText('Password')).toBeTruthy();
    expect(getByText('Entrar')).toBeTruthy();
    expect(getByText('Esqueci minha senha')).toBeTruthy();
    expect(
      getByText('Caso você ainda não tenha conta. Registrar-se aqui!'),
    ).toBeTruthy();
  });

  it('calls the onChangeEmail function when typing in the email input', () => {
    const { getByPlaceholderText } = render(
      <LoginTemplate {...defaultProps} />,
    );
    const emailInput = getByPlaceholderText('E-mail');

    fireEvent.changeText(emailInput, 'test@example.com');
    expect(onChangeEmail).toHaveBeenCalledWith('test@example.com');
  });

  it('calls the onChangePassword function when typing in the password input', () => {
    const { getByPlaceholderText } = render(
      <LoginTemplate {...defaultProps} />,
    );
    const passwordInput = getByPlaceholderText('Password');

    fireEvent.changeText(passwordInput, 'password123');
    expect(onChangePassword).toHaveBeenCalledWith('password123');
  });

  it('calls the handleSubmit function when pressing the login button', () => {
    const { getByText } = render(<LoginTemplate {...defaultProps} />);
    const loginButton = getByText('Entrar');

    fireEvent.press(loginButton);
    expect(handleSubmit).toHaveBeenCalled();
  });

  it('calls the handleForgetPass function when pressing the forget password link', () => {
    const { getByText } = render(<LoginTemplate {...defaultProps} />);
    const forgetPassLink = getByText('Esqueci minha senha');

    fireEvent.press(forgetPassLink);
    expect(handleForgetPass).toHaveBeenCalled();
  });

  it('calls the handleRegister function when pressing the register button', () => {
    const { getByText } = render(<LoginTemplate {...defaultProps} />);
    const registerButton = getByText(
      'Caso você ainda não tenha conta. Registrar-se aqui!',
    );

    fireEvent.press(registerButton);
    expect(handleRegister).toHaveBeenCalled();
  });
});
