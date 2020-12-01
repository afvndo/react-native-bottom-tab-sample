import styled from 'styled-components/native';

import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  background-color: #ff0044;
  height: 100px;
  padding-left: 10px;
`;

export const BackButton = styled(RectButton)`
  background: transparent;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  margin: 5px 0 0 10px;
`;

export const Title = styled.Text`
  font-size: 32;
  color: #fff;
`;
