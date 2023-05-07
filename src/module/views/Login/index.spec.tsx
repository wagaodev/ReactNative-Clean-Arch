import React from 'react';
import { render } from '@testing-library/react-native';
import { Login } from '.';

describe('Login component', () => {
  test('should be render the component correctly', () => {
    render(<Login />);
  });
});
