import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { AboutScreen } from './src/screens/AboutScreen';
import { TickersScreen } from './src/screens/TickersScreen';

const RootNavigator = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator.Navigator
        initialRouteName="AboutScreen"
        screenOptions={{
          tabBarActiveTintColor: '#f77111',
          headerShown: false,
          tabBarStyle: { backgroundColor: '#2e2d2d' },
        }}
      >
        <RootNavigator.Screen
          name="AboutScreen"
          component={AboutScreen}
          options={{
            tabBarLabel: 'О приложении',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="tune"
                color={color}
                size={32}
              />
            ),
            tabBarLabelStyle: {
              fontSize: 12,
            },
          }}
        ></RootNavigator.Screen>
        <RootNavigator.Screen
          name="TickersScreen"
          component={TickersScreen}
          options={{
            tabBarLabel: 'Котировки',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="table-large"
                color={color}
                size={32}
              />
            ),
            tabBarLabelStyle: {
              fontSize: 12,
            },
          }}
        ></RootNavigator.Screen>
      </RootNavigator.Navigator>
    </NavigationContainer>
  );
}
