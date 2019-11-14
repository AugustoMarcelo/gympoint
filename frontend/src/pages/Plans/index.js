import React, { useEffect, useState } from 'react';
import { MdAdd } from 'react-icons/md';

import api from '../../services/api';

import { formatPrice } from '../../util/format';

import Pagination from '../../components/Pagination';

import { Container, Header, Content, EmptyContent } from './styles';

export default function Plans() {
  const [plans, setPlans] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
  });

  async function loadPlans() {
    const { page, limit } = pagination;
    const response = await api.get('plans', {
      params: {
        page,
        limit,
      },
    });

    const data = response.data.rows.map(plan => ({
      ...plan,
      priceFormatted: formatPrice(plan.price),
    }));

    setPlans(data);
  }

  useEffect(() => {
    loadPlans();
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
        <h2>Gerenciando Planos</h2>
        <button type="button">
          <MdAdd size={20} color="#fff" style={{ marginRight: '5' }} />{' '}
          Cadastrar
        </button>
      </Header>
      {plans.length ? (
        <Content>
          <table>
            <thead>
              <tr>
                <th align="left">Título</th>
                <th align="center">Duração</th>
                <th align="center">Valor p/ Mês</th>
                <th style={{ display: 'none' }}>Ações</th>
              </tr>
            </thead>
            <tbody>
              {plans.map(plan => (
                <tr key={plan.id}>
                  <td>{plan.title}</td>
                  <td align="center">{`${plan.duration} ${
                    plan.duration > 1 ? 'meses' : 'mês'
                  }`}</td>
                  <td align="center">{plan.priceFormatted}</td>
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
        <EmptyContent>Nenhum plano encontrado</EmptyContent>
      )}
      <Pagination
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        prevDisabled={pagination.page === 1}
        nextDisabled={plans.length === 0 || plans.length < pagination.limit}
      />
    </Container>
  );
}
