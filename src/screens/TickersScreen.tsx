import { useIsFocused } from '@react-navigation/native';
import { useEffect, useRef, useState } from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Dimensions,
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
    console.log('BY');
  }

  return (
    <View style={styles.container}>
      <View>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: '#1f1e1e',
    flex: 1,
  },
});
