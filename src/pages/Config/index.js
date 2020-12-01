import React from 'react';
import Header from '../../components/Header';
import Counter from '../../components/Counter';
import * as S from './styles';

export default function Config() {
  return (
    <S.Container>
      <Header title="Config" />
      <Counter count="00001" selected={false}>
        Teste 1
      </Counter>
      <Counter count="00012" selected={true}>
        Teste 2
      </Counter>
      <Counter count="00031" selected={false}>
        Teste 3
      </Counter>
    </S.Container>
  );
}
