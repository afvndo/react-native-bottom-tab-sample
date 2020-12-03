import React, {useContext} from 'react';
import Header from '../../components/Header';
import Counter from '../../components/Counter';
import {TouchableOpacity, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import {StoreContext} from '../../hooks/storage';

import * as S from './styles';

const DATA = [
  {
    id: 1,
    title: 'Counter 01',
    count: 10,
    selected: false,
  },
  {
    id: 2,
    title: 'Counter 02',
    count: 12,
    selected: false,
  },
  {
    id: 3,
    title: 'Counter 03',
    count: 123,
    selected: false,
  },
  {
    id: 4,
    title: 'Counter 04',
    count: 9081,
    selected: true,
  },
  {
    id: 5,
    title: 'Counter 05',
    count: 321,
    selected: false,
  },
  {
    id: 6,
    title: 'Counter 06',
    count: 89,
    selected: false,
  },
];

export default function Main() {
  const [store, setStore] = useContext(StoreContext);
  const navigation = useNavigation();

  const ItemLista = (item) => (
    <TouchableOpacity onPress={() => handlerItemClick(item)}>
      <Counter count={item.count} selected={item.selected}>
        {item.title}
      </Counter>
    </TouchableOpacity>
  );

  const renderItem = ({item}) => (
    <ItemLista
      id={item.id}
      title={item.title}
      count={item.count}
      selected={item.selected}
    />
  );

  const handlerItemClick = (item) => {
    let changedItem = {...item};
    changedItem.selected = true;
    const changes = store.map((dat) => {
      dat.selected = false;
      return dat.id === changedItem.id ? {...changedItem} : dat;
    });
    setStore(changes);
    navigation.navigate('Config', {...changedItem});
  };

  const setData = async () => {
    try {
      const savedData = await AsyncStorage.getItem('@counters');
      if (savedData != null) {
        setStore(JSON.parse(savedData));
        return;
      }
      setStore(DATA);
    } catch (err) {
      Alert.alert('Error', err.toString());
    }
  };

  if (store.length === 0) {
    setData();
  }

  return (
    <S.Container>
      <Header title="Counters" />
      <S.CustomFlatList
        data={store}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={1}
        showsHorizontalScrollIndicator={false}
      />
    </S.Container>
  );
}
