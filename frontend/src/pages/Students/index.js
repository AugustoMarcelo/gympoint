import React from 'react';
import { MdAdd, MdCheckCircle } from 'react-icons/md';

import { Container, Header, Content } from './styles';

export default function Students() {
  return (
    <Container>
      <Header>
        <h2>Gerenciando Alunos</h2>
        <div>
          <button type="button">
            <MdAdd size={20} color="#fff" style={{ marginRight: '5' }} />{' '}
            Cadastrar
          </button>
          <input type="text" placeholder="Buscar aluno" />
        </div>
      </Header>
      <Content>
        <table>
          <thead>
            <tr>
              <th align="left">Nome</th>
              <th align="left">E-mail</th>
              <th align="center">Idade</th>
              <th align="center">Matrícula Ativa</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Teste</td>
              <td>test@email.com</td>
              <td align="center">20</td>
              <td align="center">
                <MdCheckCircle size={20} color="#00b894" />
              </td>
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
