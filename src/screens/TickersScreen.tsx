import { useIsFocused } from '@react-navigation/native';
import { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
} from 'react-native';
import { ErrorItem } from '../components/ErrorItem';
import {
  Indicator,
  TableItem,
} from '../components/TableItem';
import { requestData } from '../getData';

export const TickersScreen = () => {
  interface Idata {
    ticker: string;
    last: any;
    highestBid: any;
    percentChange: any;
  }

  const [data, setData] = useState<Idata[]>([]);
  const [isFirstTimeStart, setIsFirstTimeStart] =
    useState(true);
  const interval = useRef(setInterval(() => {}, 0));

  const [isLoading, setIsLoading] =
    useState<boolean>(false);
  const getData = async (isFocus: boolean) => {
    setIsLoading(true);
    if (isFocus) setData(await requestData());
    setIsLoading(false);
    setIsFirstTimeStart(false);
  };
  const isFocus = useIsFocused();

  useEffect(() => {
    interval.current = setInterval(getData, 5000, isFocus);
  }, [isFocus]);
  if (!isFocus) {
    clearInterval(interval.current);
  }

  return (
    <View style={styles.container}>
      <View style={styles.titles}>
        <Text style={styles.title}>Тикер</Text>
        <Text style={styles.title}>Последняя цена</Text>
        <Text style={styles.title}>Максимум</Text>
        <Text style={styles.title}>Изменение %</Text>
      </View>
      {isFirstTimeStart && <Indicator></Indicator>}

      <FlatList
        data={data}
        renderItem={({ item }) => {
          if (item.ticker === 'Ошибка') {
            return <ErrorItem></ErrorItem>;
          } else {
            return (
              <TableItem
                ticker={item.ticker}
                last={item.last}
                percentChange={item.percentChange}
                highestBid={item.highestBid}
                isLoading={isLoading}
              ></TableItem>
            );
          }
        }}
        keyExtractor={(item) => item.ticker}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: '#1f1e1e',
    flex: 1,
  },
  titles: {
    flexDirection: 'row',

    justifyContent: 'space-between',
    padding: 10,
    paddingHorizontal: 25,
  },
  title: {
    color: 'white',
  },
});
