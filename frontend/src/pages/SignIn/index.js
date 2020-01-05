import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import { Form, Input } from '@rocketseat/unform';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.png';
import { Container, Card, Logo } from './styles';

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <Card>
        <Logo>
          <img src={logo} width={100} height={52} alt="Gympoint logo" />
          <h1>Gympoint</h1>
        </Logo>
        <Form onSubmit={handleSubmit}>
          <Input
            name="email"
            type="email"
            placeholder="example@email.com"
            label="E-mail"
            autoComplete="off"
          />
          <Input
            name="password"
            type="password"
            placeholder="**********"
            label="Password"
          />
          <button type="submit" disabled={loading ? 1 : 0}>
            {loading ? (
              <FaSpinner size={20} color="#fff" />
            ) : (
              'Entrar no sistema'
            )}
          </button>
        </Form>
      </Card>
    </Container>
  );
}
