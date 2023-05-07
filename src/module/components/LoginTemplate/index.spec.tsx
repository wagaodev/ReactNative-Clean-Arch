import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { LoginTemplate } from '.';

describe('LoginTemplate', () => {
  const handleSubmit = jest.fn();
  const handleRegister = jest.fn();
  const handleForgetPass = jest.fn();
  const value = 'password';
  const onChange = jest.fn();
  const disabled = false;
  const loading = false;

  test('should render email and password inputs', () => {
    const { getByPlaceholderText } = render(
      <LoginTemplate
        handleSubmit={handleSubmit}
        handleRegister={handleRegister}
        handleForgetPass={handleForgetPass}
        value={value}
        onChange={onChange}
        disabled={disabled}
        loading={loading}
      />,
    );

    expect(getByPlaceholderText('E-mail')).not.toBeNull();
    expect(getByPlaceholderText('Password')).not.toBeNull();
  });

  test('should call handleSubmit when clicking the login button', () => {
    const { getByText } = render(
      <LoginTemplate
        handleSubmit={handleSubmit}
        handleRegister={handleRegister}
        handleForgetPass={handleForgetPass}
        value={value}
        onChange={onChange}
        disabled={disabled}
        loading={loading}
      />,
    );

    fireEvent.press(getByText('Entrar'));

    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });

  test('should call handleForgetPass when clicking the forget password button', () => {
    const { getByText } = render(
      <LoginTemplate
        handleSubmit={handleSubmit}
        handleRegister={handleRegister}
        handleForgetPass={handleForgetPass}
        value={value}
        onChange={onChange}
        disabled={disabled}
        loading={loading}
      />,
    );

    fireEvent.press(getByText('Esqueci minha senha'));

    expect(handleForgetPass).toHaveBeenCalledTimes(1);
  });

  test('should call handleRegister when clicking the register button', () => {
    const { getByText } = render(
      <LoginTemplate
        handleSubmit={handleSubmit}
        handleRegister={handleRegister}
        handleForgetPass={handleForgetPass}
        value={value}
        onChange={onChange}
        disabled={disabled}
        loading={loading}
      />,
    );

    fireEvent.press(
      getByText('Caso você ainda não tenha conta. Registrar-se aqui!'),
    );

    expect(handleRegister).toHaveBeenCalledTimes(1);
  });
});
