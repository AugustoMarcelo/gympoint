import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: ${props => (props.open ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;

  form {
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 450px;
    padding: 20px;

    div.header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      strong {
        text-transform: uppercase;
        color: #444;
        font-weight: bold;
        margin-bottom: 10px;
      }

      span {
        cursor: pointer;

        svg {
          transition: all 0.2s;
          &:hover {
            color: ${darken(0.5, '#444')} !important;
          }
        }

        &:focus {
          svg {
            color: ${darken(0.5, '#444')} !important;
          }
        }
      }
    }

    p {
      margin-bottom: 15px;
      font-size: 16px;
      line-height: 26px;
      color: #666;
      text-align: justify;
    }

    label {
      text-transform: uppercase;
      color: #444;
      font-weight: bold;
      margin-bottom: 5px;
    }

    textarea {
      background: transparent;
      border: 1px solid #ddd;
      height: 100px;
      padding: 15px;
      border-radius: 4px;
      margin-bottom: 10px;
      color: #444;
    }

    span {
      color: #ee4d64;
      align-self: flex-start;
      margin: 0 0px 10px;
      font-weight: 700;
    }

    button {
      color: #fff;
      background: #ee4d64;
      text-transform: uppercase;
      font-weight: bold;
      border: 0;
      border-radius: 4px;
      height: 45px;
      padding: 0 15px;
      transition: background 0.2s;

      &:hover:not([disabled]) {
        background: ${darken(0.1, '#ee4d64')};
      }

      &[disabled] {
        background: #ccc;
        cursor: not-allowed;
      }
    }
  }
`;
