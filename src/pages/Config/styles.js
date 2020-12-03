import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background: #08ff;
  justify-content: flex-start;
  align-items: center;
`;

export const ContainerData = styled.View`
  flex: 1;
  width: 100%;
  padding: 20px;
  justify-content: center;
  align-items: flex-start;
`;

export const ContainerTitle = styled.Text`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const ContainerDataButtons = styled.View`
  flex: 1;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
`;

export const ButtonConfig = styled.TouchableOpacity`
  min-width: 100px;
  flex: 1 1 auto;
  height: 60px;
  justify-content: center;
  align-items: center;
  background-color: silver;
  border-radius: 8px;
  margin: 5px;
`;

export const ButtonConfigText = styled.Text`
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
`;

export const ContainerDataSelected = styled.View`
  flex: 1;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
`;

export const ContainerDataSelectedButtons = styled.View`
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  border: 3px dashed silver;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  flex-direction: row;
  flex-wrap: wrap;
`;
