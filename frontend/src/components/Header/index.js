import React from 'react';

import logo from '../../assets/logo.png';
import {
  Container,
  ContentLeft,
  Logo,
  Navigation,
  ContentRight,
} from './styles';

export default function Header() {
  return (
    <Container>
      <ContentLeft>
        <Logo>
          <img src={logo} height={23} width={45} alt="Gympoint Logo" />
          <h4>Gympoint</h4>
        </Logo>
        <Navigation>
          <li>
            <a href="#">Alunos</a>
          </li>
          <li>
            <a href="#">Planos</a>
          </li>
          <li>
            <a href="#">Matrículas</a>
          </li>
          <li>
            <a href="#">Pedidos de auxílio</a>
          </li>
        </Navigation>
      </ContentLeft>
      <ContentRight>
        <strong>Marcelo Augusto</strong>
        <a href="#">sair do sistema</a>
      </ContentRight>
    </Container>
  );
}
