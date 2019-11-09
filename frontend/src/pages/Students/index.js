import React from 'react';

import { Container, Header, Content } from './styles';

export default function Students() {
  return (
    <Container>
      <Header>
        <h2>Gerenciando Alunos</h2>
        <div>
          <button type="button">Cadastrar</button>
          <input type="text" placeholder="Buscar aluno" />
        </div>
      </Header>
      <Content>
        <table>
          <thead>
            <th align="left">Nome</th>
            <th align="left">E-mail</th>
            <th align="center">Idade</th>
            <th align="center">Matrícula Ativa</th>
            <th> </th>
          </thead>
          <tbody>
            <tr>
              <td>Teste</td>
              <td>test@email.com</td>
              <td align="center">20</td>
              <td align="center">OK</td>
              <td className="actions">
                <button
                  type="button"
                  title="Clique para editar o aluno"
                  className="btn btn-edit"
                >
                  editar
                </button>
                <button
                  type="button"
                  title="Clique para remover o aluno"
                  className="btn btn-delete"
                >
                  apagar
                </button>
              </td>
            </tr>
            <tr>
              <td>Teste</td>
              <td>test@email.com</td>
              <td align="center">20</td>
              <td align="center">OK</td>
              <td className="actions">
                <button
                  type="button"
                  title="Clique para editar o aluno"
                  className="btn btn-edit"
                >
                  editar
                </button>
                <button
                  type="button"
                  title="Clique para remover o aluno"
                  className="btn btn-delete"
                >
                  apagar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </Content>
    </Container>
  );
}
