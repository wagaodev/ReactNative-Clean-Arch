import React from 'react';
import { Props } from './types';
import * as S from './styles';

export const HandleError = ({ message }: Props) => {
  return (
    <S.AlertContainer>
      <S.AlertText>{message}</S.AlertText>
    </S.AlertContainer>
  );
};
