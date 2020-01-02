import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  padding: 20px;
  margin-bottom: 15px;
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

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 10px;
`;

export const ListItem = styled.TouchableOpacity`
  background: #fff;
  border-radius: 4px;
  border: 1px solid #ddd;
  padding: 15px;
  margin-bottom: 10px;
`;

export const StatusQuestion = styled.Text`
  color: ${props => (props.status ? '#42CB59' : '#999')};
  margin-left: 10px;
  font-weight: bold;
`;

export const Question = styled.Text`
  color: #666;
  font-size: 14px;
`;
