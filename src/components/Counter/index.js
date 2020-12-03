import React from 'react';
import zeroFill from '../../utils/zerofill';

import * as S from './styles';

function Counter({children, selected = false, count = 0, ...rest}) {
  return (
    <S.Container {...rest} selected={selected}>
      <S.Title selected={selected}>{children}</S.Title>
      <S.Counter selected={selected}>{zeroFill(count, 5)}</S.Counter>
    </S.Container>
  );
}

export default Counter;
