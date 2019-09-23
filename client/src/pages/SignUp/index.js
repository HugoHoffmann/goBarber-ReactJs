import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import logo from '~/assets/img/logo.svg';
import { Form, Input } from '@rocketseat/unform';


const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string().email('Insira um e-mail válido').required('O email é obrigatório'),
  password: Yup.string().min(6, 'No mínimo 6 caracteres').required('A senha é obrigatória')
})
export default function SignUp() {

  function handleSubmit(data){

  }
  return (
    <>
      <img src={logo} alt="GoBarber"/>
      <Form schema={schema} onSubmit={handleSubmit} >
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu E-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />
        <button type="submit">
          Criar conta
        </button>
        <Link to="/">Já tenho Login</Link>
      </Form>
    </>
  );
}
