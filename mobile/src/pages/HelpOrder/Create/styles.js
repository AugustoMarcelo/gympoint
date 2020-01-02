import styled from 'styled-components/native';

export const Content = styled.View`
  padding: 20px;
  margin-bottom: 15px;
`;

export const Input = styled.TextInput`
  height: 300px;
  align-self: stretch;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 15px;
  margin-bottom: 10px;
`;

export const Button = styled.TouchableOpacity`
  height: 46px;
  background: #ee4e62;
  align-self: stretch;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  elevation: 2;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
`;
