import React, { useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Alert } from 'react-native';

import { createUser } from '../../store';
import { HandleError } from '../../components';

import * as S from './styles';

export const Login = ({ navigation }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const addUser = createUser((state) => state.addUser);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email inválido').required('Email é obrigatório'),
    password: Yup.string().required('Senha é obrigatória'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values) => handleSubmit(values),
  });

  const handleSubmit = (values: { email: string; password: string }) => {
    setLoading(true);
    setDisabled(true);
    try {
      addUser({
        email: values.email,
        password: values.password,
      });
      setLoading(false);
      setDisabled(false);
    } catch (e) {
      return HandleError(e);
    }
    return navigation.navigate('Home');
  };

  const handleAlert = (msg: string) => {
    Alert.alert(msg);
  };

  return (
    <S.Login
      disabled={disabled}
      loading={loading}
      password={formik.values.password}
      onChangePassword={formik.handleChange('password')}
      email={formik.values.email}
      onChangeEmail={formik.handleChange('email')}
      handleSubmit={formik.handleSubmit}
      handleForgetPass={() => handleAlert('Esqueceu sua senha??')}
      handleRegister={() => handleAlert('Clicou em registrar')}
      emailError={formik.touched.email && formik.errors.email}
      passwordError={formik.touched.password && formik.errors.password}
    />
  );
};
