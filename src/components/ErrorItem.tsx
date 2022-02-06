import { StyleSheet, Text, View } from 'react-native';

export const ErrorItem = (props: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.error}>Ошибка(...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f79992',
    borderRadius: 15,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  error: { color: 'black', fontSize: 15 },
});
