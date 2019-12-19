import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background: #fff;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

export const Title = styled.Text`
  text-transform: uppercase;
  font-weight: bold;
  color: #ee4e62;
  font-size: 24;
  margin-top: 10;
`;

export const Input = styled.TextInput`
  height: 46px;
  align-self: stretch;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-top: 20px;
  padding: 0 15px;
`;

export const Button = styled.TouchableOpacity`
  height: 46px;
  background: #ee4e62;
  align-self: stretch;
  border-radius: 4px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;
