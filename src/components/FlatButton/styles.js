import styled from 'styled-components/native';

export const ContainerIconButton = styled.TouchableOpacity`
  max-width: 120px;
  width: 90px;
  height: 60px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 8px;
  background: ${({selected, backgroundColor}) =>
    selected ? '#11aa' : backgroundColor};
  margin-bottom: 5px;
  margin-right: 5px;
`;

export const ContainerIconButtonText = styled.Text`
  align-self: center;
  font-size: 12px;
  font-weight: 400;
  color: ${({selected, color}) => (selected ? '#fff' : color)};
`;
