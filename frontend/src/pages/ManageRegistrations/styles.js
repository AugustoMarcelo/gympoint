import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 30px 100px 0px;
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
      border: 0;
      border-radius: 4px;
      height: 36px;
      padding: 0 15px;
      transition: background 0.2s;

      display: flex;
      align-items: center;

      &.btn-back {
        background: #ccc;
        margin-right: 10px;

        &:hover {
          background: ${darken(0.1, '#ccc')};
        }
      }

      &.btn-save {
        background: #ee4d64;

        &:hover {
          background: ${darken(0.1, '#ee4d64')};
        }
      }
    }
  }
`;

export const Content = styled.div`
  margin-top: 20px;
  background: #fff;
  padding: 20px;
  border-radius: 4px;

  form {
    display: flex;
    flex-direction: column;

    label {
      text-transform: uppercase;
      color: #444;
      font-weight: bold;
      margin-bottom: 5px;
    }

    input {
      background: transparent;
      border: 1px solid #ddd;
      height: 44px;
      padding: 0 15px;
      border-radius: 4px;
      margin-bottom: 15px;
      color: #444;
    }

    div.input-fields {
      display: flex;
      justify-content: space-between;

      div.input-select-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-right: 20px;

        input {
          height: auto;
        }
      }

      div.input-field {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-right: 20px;

        input[disabled] {
          background: #f5f5f5;
        }

        &:last-of-type {
          margin-right: 0;
        }
      }
    }
  }
`;
