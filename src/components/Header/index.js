import React from 'react';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import {useNavigation} from '@react-navigation/native';

import * as S from './styles';

function Header({title, backbutton = false}) {
  const navigation = useNavigation();

  async function handleButtonClick() {
    navigation.navigate('Main');
  }

  return (
    <S.Container>
      <S.HeaderContainer>
        {backbutton ? (
          <S.BackButton onPress={handleButtonClick}>
            <Icon name="arrow-left" size={35} color="#fff" />
          </S.BackButton>
        ) : (
          <Text />
        )}
        <S.Title>{title}</S.Title>
      </S.HeaderContainer>
    </S.Container>
  );
}

export default Header;
