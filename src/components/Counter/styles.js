import styled from 'styled-components/native';

export const Container = styled.View`
  background: ${({selected}) => (selected ? '#bbaa00' : '#fff090')};
  width: 90%;
  height: 155px;
  border-radius: 5px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  padding: 10px;
  border: 5px solid darkblue;
`;

export const Title = styled.Text`
  color: ${({selected}) => (selected ? '#000' : '#00ff')};
  font-size: 18px;
  align-self: flex-start;
`;

export const Counter = styled.Text`
  color: ${({selected}) => (selected ? '#000' : '#0Aaf')};
  font-size: 74px;
  font-weight: 700;
  align-self: flex-end;
`;
