import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import LoginPage from '../Pages/LoginRegisterFlow/LoginPage';

function PagesNavigator(): React.JSX.Element {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginPage}
        options={loginScreenOptions}
      />
    </Stack.Navigator>
  );
}

const loginScreenOptions: StackNavigationOptions = {
  animation: 'fade',
  gestureEnabled: true,
  headerMode: 'screen',
  headerShown: false,
  headerTitle: 'Login Screen',
  title: 'Login',
};

export default PagesNavigator;
