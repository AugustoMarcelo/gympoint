import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const Container = styled.div`
  height: 100%;
  background: #ee4d64;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  width: 100%;
  max-width: 360px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  padding: 50px 20px;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

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

    button {
      margin-top: 5px;
      height: 44px;
      font-size: 16px;
      background: #ee4d64;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      transition: background 0.2s;

      &[disabled] {
        cursor: not-allowed;
        background: #bbb;
        color: #888;
        svg {
          animation: ${rotate} 2s linear infinite;
        }
      }

      &:hover:not([disabled]) {
        background: ${darken(0.1, '#ee4d64')};
      }
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: #ee4d64;
    text-transform: uppercase;
    margin-top: 10px;
  }
`;
