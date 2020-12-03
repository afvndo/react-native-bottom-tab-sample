import React from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';
import {back} from 'react-native/Libraries/Animated/src/Easing';

import * as S from './styles';

function FlatButton({
  children,
  icon = 'home',
  title = '',
  color = '#000',
  backgroundColor = '#c0c0c0',
  selected = false,
  ...rest
}) {
  return (
    <S.ContainerIconButton
      {...rest}
      backgroundColor={backgroundColor}
      color={color}
      selected={selected}>
      <Icon name={icon} size={35} color={selected ? '#fff' : color} />
      <S.ContainerIconButtonText color={color} selected={selected}>
        {title}
      </S.ContainerIconButtonText>
    </S.ContainerIconButton>
  );
}

export default FlatButton;
