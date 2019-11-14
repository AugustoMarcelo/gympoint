import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 30px 300px 0px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.div`
  margin-top: 20px;
  background: #fff;
  padding: 20px 20px 0;
  border-radius: 4px;

  table {
    width: 100%;
    border-collapse: collapse;

    th {
      text-transform: uppercase;
      color: #444;
    }

    tr:not(:last-of-type) {
      border-bottom: 1px solid #eee;
    }

    tr {
      td {
        width: 80%;
        padding: 15px 0;
        color: #666;

        button.btn {
          border: 0;
          background: transparent;
          transition: color 0.1s;
          color: #4d85ee;

          &:hover {
            color: ${darken(0.2, '#4d85ee')};
          }
        }

        &.actions {
          width: 20%;
          text-align: right;
        }
      }
    }
  }
`;

export const EmptyContent = styled.div`
  margin-top: 20px;
  border-radius: 4px;
  background: #fff;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #444;
  font-size: 16px;
`;
