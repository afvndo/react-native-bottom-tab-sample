import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  height: 100%;
  background: #08ff;
  justify-content: flex-start;
  align-items: center;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 34;
  font-weight: 600;
  padding: 4px;
  padding-right: 12px;
`;

export const CustomFlatList = styled.FlatList`
  width: 95%;
  padding: 5px;
  padding-top: 30px;
`;
