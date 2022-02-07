import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
} from 'react-native';
const normalizeLen = (str: string) => {
  if (str.length > 10) {
    return str.substring(0, 10);
  } else {
    return str;
  }
};

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
      {!props.isLoading && <Indicator></Indicator>}
      <View style={styles.info}>
        <View>
          <Text style={styles.data}>
            {normalizeLen(props.ticker)}
          </Text>
        </View>
        <View>
          <Text style={styles.data}>
            {normalizeLen(props.last)}
          </Text>
        </View>
        <View>
          <Text style={styles.data}>
            {normalizeLen(props.highestBid)}
          </Text>
        </View>
        <View>
          <Text style={styles.data}>
            {normalizeLen(props.percentChange)}
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

  data: { color: '#f77111', fontSize: 14 },
  indicator: {
    position: 'absolute',
    right: 3,
    top: 3,
  },
});
