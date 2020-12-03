import styled from 'styled-components/native';

import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  width: 100%;
  align-items: flex-end;
  justify-content: flex-start;
  flex-direction: row;
  background-color: darkblue;
  height: 80px;
  padding-left: 10px;
  padding-bottom: 10px;
`;

export const HeaderContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const BackButton = styled.TouchableOpacity`
  background: transparent;
  width: 35px;
  height: 35px;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  border-radius: 20px;
  margin-right: 5px;
`;

export const Title = styled.Text`
  font-size: 32;
  color: #fff;
`;
