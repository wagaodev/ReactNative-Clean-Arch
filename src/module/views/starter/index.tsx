import React from 'react';
import * as S from './styles';
import { TouchableOpacity } from 'react-native';

export const Starter = ({ navigation }) => {
  return (
    <S.Container>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <S.Title>Navegar</S.Title>
      </TouchableOpacity>
    </S.Container>
  );
};
