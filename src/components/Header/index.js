import React from 'react';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import {useNavigation} from '@react-navigation/native';

import * as S from './styles';

function Header({title, backbutton = false}) {
  const navigation = useNavigation();

  async function handleButtonClick() {
    navigation.goBack();
  }

  return (
    <S.Container>
      {backbutton ? (
        <S.BackButton onPress={handleButtonClick}>
          <Icon name="chevron-left" size={42} color="#1380BA" />
        </S.BackButton>
      ) : (
        <Text />
      )}
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}

export default Header;
