import React from 'react';

import { Form, Input } from '@rocketseat/unform';

import logo from '../../assets/logo.png';
import { Container, Card, Logo } from './styles';

export default function SignIn() {
  return (
    <Container>
      <Card>
        <Logo>
          <img src={logo} width={100} height={52} alt="Gympoint logo" />
          <h1>Gympoint</h1>
        </Logo>
        <Form>
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
          <button type="button">Entrar no sistema</button>
        </Form>
      </Card>
    </Container>
  );
}
