import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import Pagination from '../../components/Pagination';
import Modal from '../../components/Modal';

import { Container, Header, Content, EmptyContent } from './styles';

export default function HelpOrders() {
  const [modalData, setModalData] = useState({
    status: false,
    values: {},
  });
  const [helpOrders, setHelpOrders] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
  });

  async function loadHelpOrders() {
    const { page, limit } = pagination;
    const response = await api.get('help-orders/no-answers', {
      params: {
        page,
        limit,
      },
    });
    setHelpOrders(response.data.rows);
  }

  useEffect(() => {
    loadHelpOrders();
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

  function handleSubmitAnswer(data) {
    console.tron.log(data);
    setModalData({ ...modalData, status: false });
  }

  return (
    <Container>
      <Modal data={modalData} onHandleSubmit={handleSubmitAnswer} />
      <Header>
        <h2>Pedidos de Auxílio</h2>
      </Header>
      {helpOrders.length ? (
        <Content>
          <table>
            <thead>
              <tr>
                <th align="left">Aluno</th>
                <th style={{ display: 'none' }}>Ações</th>
              </tr>
            </thead>
            <tbody>
              {helpOrders.map(helpOrder => (
                <tr key={helpOrder.id}>
                  <td>{helpOrder.student.name}</td>
                  <td className="actions">
                    <button
                      type="button"
                      className="btn"
                      onClick={() =>
                        setModalData({ status: true, values: { ...helpOrder } })
                      }
                    >
                      RESPONDER
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Content>
      ) : (
        <EmptyContent>Nenhum pedido de auxílio encontrado</EmptyContent>
      )}
      <Pagination
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        prevDisabled={pagination.page === 1}
        nextDisabled={
          helpOrders.length === 0 || helpOrders.length < pagination.limit
        }
      />
    </Container>
  );
}
