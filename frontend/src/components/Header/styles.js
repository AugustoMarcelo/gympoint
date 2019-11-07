import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  padding: 5px 20px;
  box-shadow: 0px 1px 5px #ddd;
`;

export const ContentLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  padding-right: 20px;
  margin-right: 20px;
  border-right: 2px solid #ddd;

  h4 {
    text-transform: uppercase;
    margin-left: 10px;
    color: #ee4d64;
  }
`;

export const Navigation = styled.ul`
  display: flex;

  li {
    margin-right: 10px;

    a {
      text-transform: uppercase;
      color: #999;
      font-weight: bold;
    }
  }
`;

export const ContentRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  strong {
    color: #666;
  }

  a {
    color: #ee4d64;
  }
`;
