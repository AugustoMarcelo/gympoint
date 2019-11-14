import React, { useEffect, useState } from 'react';
import { MdAdd, MdCheckCircle, MdCancel } from 'react-icons/md';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import api from '../../services/api';

import Pagination from '../../components/Pagination';

import { Container, Header, Content, EmptyContent } from './styles';

export default function Registrations() {
  const [registrations, setRegistrations] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
  });

  async function loadRegistrations() {
    const { page, limit } = pagination;
    const response = await api.get('registrations', {
      params: {
        page,
        limit,
      },
    });
    setRegistrations(response.data.rows);
  }

  useEffect(() => {
    loadRegistrations();
  }, []);

  useEffect(() => {
    loadRegistrations();
  }, [pagination]);

  function handlePreviousPage() {
    const { page } = pagination;
    setPagination({
      ...pagination,
      page: page - 1,
    });
  }

  function handleNextPage() {
    const { page } = pagination;
    setPagination({
      ...pagination,
      page: page + 1,
    });
  }

  return (
    <Container>
      <Header>
        <h2>Gerenciando Matrículas</h2>
        <button type="button">
          <MdAdd size={20} color="#fff" style={{ marginRight: '5' }} />{' '}
          Cadastrar
        </button>
      </Header>
      {registrations.length ? (
        <Content>
          <table>
            <thead>
              <tr>
                <th align="left">Aluno</th>
                <th align="center">Plano</th>
                <th align="center">Início</th>
                <th align="center">Término</th>
                <th align="center">Ativa</th>
                <th style={{ display: 'none' }}>Ações</th>
              </tr>
            </thead>
            <tbody>
              {registrations.map(registration => (
                <tr>
                  <td>{registration.student.name}</td>
                  <td align="center">{registration.plan.title}</td>
                  <td align="center">
                    {format(
                      parseISO(registration.start_date),
                      "dd 'de' MMMM 'de' yyyy",
                      { locale: ptBR }
                    )}
                  </td>
                  <td align="center">
                    {format(
                      parseISO(registration.end_date),
                      "dd 'de' MMMM 'de' yyyy",
                      { locale: ptBR }
                    )}
                  </td>
                  <td align="center">
                    {registration.active ? (
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
        <EmptyContent>Nenhuma matrícula encontrada</EmptyContent>
      )}

      <Pagination
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        prevDisabled={pagination.page === 1}
        nextDisabled={
          registrations.length === 0 || registrations.length < pagination.limit
        }
      />
    </Container>
  );
}
