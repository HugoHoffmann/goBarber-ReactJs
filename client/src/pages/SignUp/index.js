import React from 'react';
import { Link } from 'react-router-dom'
import logo from '~/assets/img/logo.svg';
import { Form, Input } from '@rocketseat/unform';

export default function SignUp() {

  function handleSubmit(data){

  }
  return (
    <>
      <img src={logo} alt="GoBarber"/>
      <Form onSubmit={} >
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
