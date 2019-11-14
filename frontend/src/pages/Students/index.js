import React, { useState, useEffect } from 'react';
import { MdAdd, MdCheckCircle, MdCancel } from 'react-icons/md';

import api from '../../services/api';

import Pagination from '../../components/Pagination';

import { Container, Header, Content, EmptyContent } from './styles';

export default function Students() {
  const [students, setStudents] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
  });

  async function loadStudents() {
    const { page, limit } = pagination;
    const response = await api.get('students', {
      params: {
        page,
        limit,
      },
    });
    setStudents(response.data.rows);
  }

  useEffect(() => {
    loadStudents();
  }, [pagination]);

  function handleNextPage() {
    const { page } = pagination;
    setPagination({
      ...pagination,
      page: page + 1,
    });
  }

  function handlePreviousPage() {
    const { page } = pagination;
    setPagination({
      ...pagination,
      page: page - 1,
    });
  }

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
      {students.length ? (
        <Content>
          <table>
            <thead>
              <tr>
                <th align="left">Nome</th>
                <th align="left">E-mail</th>
                <th align="center">Idade</th>
                <th align="center">Matrícula Ativa</th>
                <th style={{ display: 'none' }}>Ações</th>
              </tr>
            </thead>
            <tbody>
              {students.map(student => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td align="center">{student.age}</td>
                  <td align="center">
                    {student.registration ? (
                      <MdCheckCircle size={20} color="#00b894" />
                    ) : (
                      <MdCancel size={20} color="#EE4D64" />
                    )}
                  </td>
                  <td className="actions">
                    <button
                      type="button"
                      title="Clique para editar o aluno"
                      className="btn btn-edit"
                    >
                      EDITAR
                    </button>
                    <button
                      type="button"
                      title="Clique para remover o aluno"
                      className="btn btn-delete"
                    >
                      APAGAR
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Content>
      ) : (
        <EmptyContent>Nenhum aluno encontrado</EmptyContent>
      )}
      <Pagination
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        prevDisabled={pagination.page === 1}
        nextDisabled={
          students.length === 0 || students.length < pagination.limit
        }
      />
    </Container>
  );
}
