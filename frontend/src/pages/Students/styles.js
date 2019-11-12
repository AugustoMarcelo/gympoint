import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 30px 80px 0px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;

    button {
      color: #fff;
      text-transform: uppercase;
      font-weight: bold;
      background: #ee4d64;
      border: 0;
      border-radius: 4px;
      height: 36px;
      padding: 0 15px;
      margin-right: 10px;

      display: flex;
      align-items: center;

      &:hover {
        background: ${darken(0.1, '#ee4d64')};
      }
    }

    input {
      height: 36px;
      border: 0;
      background: #fff;
      border-radius: 4px;
      padding: 0 10px;
    }
  }
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
        width: 22%;
        padding: 15px 0;
        color: #666;

        button.btn {
          border: 0;
          background: transparent;
          transition: color 0.1s;

          &.btn-edit {
            margin-right: 15px;
            color: #4d85ee;

            &:hover {
              color: ${darken(0.2, '#4d85ee')};
            }
          }

          &.btn-delete {
            color: #de3b3b;

            &:hover {
              color: red;
            }
          }
        }

        &.actions {
          width: 18%;
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

export const Pagination = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    border: 1px solid #ee4d64;
    background: transparent;
    height: 36px;
    color: #ee4d64;
    font-weight: bold;
    border-radius: 4px;
    padding: 0 15px;
    transition: all 0.2s;

    &:first-of-type {
      margin-right: 10px;
    }

    &[disabled] {
      border: 1px solid #bbb;
      color: #bbb;
      cursor: not-allowed;
    }

    &:hover:not([disabled]) {
      background: #ee4d64;
      color: #fff;
    }
  }
`;
