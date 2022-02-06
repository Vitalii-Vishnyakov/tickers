import { StyleSheet, Text, View } from 'react-native';

export const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>О приложении</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1f1e1e',
  },
  text: {
    color: '#f77111',
  },
});
