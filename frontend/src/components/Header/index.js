import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import {
  Container,
  ContentLeft,
  Logo,
  Navigation,
  ContentRight,
} from './styles';

export default function Header() {
  const [selectedMenus, setSelectedMenus] = useState({
    students: '',
    plans: '',
    registrations: '',
    'help-orders': '',
  });

  useEffect(() => {
    const endpoint = window.location.pathname.split('/').filter(char => {
      return char !== '';
    });

    switch (`/${endpoint[0]}`) {
      case '/students':
        setSelectedMenus({ students: 'active' });
        break;
      case '/plans':
        setSelectedMenus({ plans: 'active' });
        break;
      case '/registrations':
        setSelectedMenus({ registrations: 'active' });
        break;
      case '/help-orders':
        setSelectedMenus({ 'help-orders': 'active' });
        break;
      default:
    }
  }, []);

  return (
    <Container>
      <ContentLeft>
        <Logo>
          <img src={logo} height={23} width={45} alt="Gympoint Logo" />
          <h4>Gympoint</h4>
        </Logo>
        <Navigation>
          <li>
            <Link className={`menu ${selectedMenus.students}`} to="/students">
              Alunos
            </Link>
          </li>
          <li>
            <Link className={`menu ${selectedMenus.plans}`} to="/plans">
              Planos
            </Link>
          </li>
          <li>
            <Link
              className={`menu ${selectedMenus.registrations}`}
              to="/registrations"
            >
              Matrículas
            </Link>
          </li>
          <li>
            <Link
              className={`menu ${selectedMenus['help-orders']}`}
              to="/help-orders"
            >
              Pedidos de Auxílio
            </Link>
          </li>
        </Navigation>
      </ContentLeft>
      <ContentRight>
        <strong>Marcelo Augusto</strong>
        <button type="button" onClick={() => console.log('logout')}>
          sair do sistema
        </button>
      </ContentRight>
    </Container>
  );
}
