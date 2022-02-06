import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
export const Indicator = () => (
  <ActivityIndicator
    style={styles.indicator}
    size="small"
    color="white"
    animating={true}
  ></ActivityIndicator>
);
export const TableItem = (props: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.ticker}>
        <Text style={styles.data}>{props.ticker}</Text>
        {!props.isLoading && <Indicator></Indicator>}
      </View>
      <View style={styles.info}>
        <View>
          <Text style={styles.title}>Последняя цена</Text>
          <Text style={styles.data}>{props.last}</Text>
        </View>
        <View>
          <Text style={styles.title}>Максимум</Text>
          <Text style={styles.data}>
            {props.highestBid}
          </Text>
        </View>
        <View>
          <Text style={styles.title}>Изменение %</Text>
          <Text style={styles.data}>
            {props.percentChange}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#57526b',
    borderRadius: 15,
    margin: 10,
  },
  ticker: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: 'white',
  },
  data: { color: '#f77111', fontSize: 15 },
  indicator: {
    position: 'absolute',
    right: 0,
  },
});
