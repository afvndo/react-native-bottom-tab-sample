import React, {useEffect, useState, useContext} from 'react';
import {Alert} from 'react-native';
import Header from '../../components/Header';
import FlatButton from '../../components/FlatButton';
import Counter from '../../components/Counter';
import * as S from './styles';
import {useRoute} from '@react-navigation/native';
import {StoreContext} from '../../hooks/storage';

import AsyncStorage from '@react-native-community/async-storage';

const fillId = (id) => {
  return id < 10 ? '0' + id : id;
};

export default function Config() {
  const route = useRoute();
  const params = route.params;
  const [store, setStore] = useContext(StoreContext);
  const [selectedCount, setSelectedCount] = useState({});
  const storeLastCount = store.length;
  const defaultCount = {
    id: 0,
    title: 'Counter 00',
    selected: true,
    count: 0,
  };

  useEffect(() => {
    if (params === undefined) {
      const id = storeLastCount + 1;
      setSelectedCount({
        id,
        title: `Counter ${fillId(id)}`,
        count: 0,
        selected: true,
      });
    } else {
      setSelectedCount(params);
    }
  }, [params, storeLastCount]);

  const addCounter = () => {
    const lastCount = store.length;
    const id = store[lastCount - 1].id + 1;
    let newList = store.map((all) => {
      all.selected = false;
      return all;
    });
    const newItem = {
      id,
      title: `Counter ${fillId(id)}`,
      count: 0,
      selected: true,
    };
    newList.push(newItem);
    setStore(newList);
    setSelectedCount(newItem);
  };

  const removeCounter = () => {
    const newList = store.filter(({id}) => {
      return id !== selectedCount.id;
    });
    setStore(newList);
    setSelectedCount(defaultCount);
    Alert.alert('Atenção', `${selectedCount.title}, excluído com sucesso !!!`);
  };

  const updateStorePosition = (pos) => {
    const newList = store.map((all) => {
      return all.id === pos.id ? pos : all;
    });
    setStore(newList);
  };

  const saveCounter = () => {
    try {
      AsyncStorage.setItem('@counters', JSON.stringify(store));
      Alert.alert('Atenção', 'Dados salvos com sucesso!!!');
    } catch (err) {
      Alert.alert('Error', err.toString());
    }
  };

  const incrementar = () => {
    const {id, title, selected, count} = selectedCount;
    const incItem = {
      id,
      title,
      selected,
      count: count + 1,
    };
    setSelectedCount(incItem);
    updateStorePosition(incItem);
  };

  const decrementar = () => {
    const {id, title, selected, count} = selectedCount;
    const decItem = {
      id,
      title,
      selected,
      count: count - 1,
    };
    setSelectedCount(decItem);
    updateStorePosition(decItem);
  };

  return (
    <S.Container>
      <Header title="Config" backbutton={true} />
      <S.ContainerData>
        <S.ContainerTitle>Counters</S.ContainerTitle>
        <S.ContainerDataButtons>
          <S.ButtonConfig>
            <S.ButtonConfigText onPress={() => addCounter()}>
              Add{'\n'}Counter
            </S.ButtonConfigText>
          </S.ButtonConfig>
          <S.ButtonConfig>
            <S.ButtonConfigText onPress={() => removeCounter()}>
              Remove{'\n'}Counter
            </S.ButtonConfigText>
          </S.ButtonConfig>
        </S.ContainerDataButtons>

        <Counter count={selectedCount.count} selected={selectedCount.selected}>
          {selectedCount.title}
        </Counter>

        <S.ContainerDataSelected>
          <S.ContainerTitle>Selected Counter</S.ContainerTitle>
          <S.ContainerDataSelectedButtons>
            <FlatButton
              onPress={() => incrementar()}
              title="Incrementar"
              icon="plus"
              backgroundColor="darkblue"
              color="white"
            />
            <FlatButton
              onPress={() => decrementar()}
              title="Decrementar"
              icon="minus"
              backgroundColor="darkred"
              color="white"
            />
            <FlatButton
              onPress={() => saveCounter()}
              title="Salvar"
              icon="check"
              backgroundColor="green"
              color="white"
            />
          </S.ContainerDataSelectedButtons>
        </S.ContainerDataSelected>
      </S.ContainerData>
    </S.Container>
  );
}
