import styled from 'styled-components';

export const Container = styled.div`
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
