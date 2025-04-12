import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import LoginPage from '../Pages/LoginRegisterFlow/LoginPage';
import RegisterPage from '../Pages/LoginRegisterFlow/RegisterPage';

function PagesNavigator(): React.JSX.Element {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="LoginPage">
      <Stack.Screen
        name="LoginPage"
        component={LoginPage}
        options={loginPageOptions}
      />
      <Stack.Screen
        name="RegisterPage"
        component={RegisterPage}
        options={RegisterPageOptions}
      />
    </Stack.Navigator>
  );
}

const loginPageOptions: StackNavigationOptions = {
  animation: 'fade',
  gestureEnabled: true,
  headerMode: 'screen',
  headerShown: false,
  headerTitle: 'Login Page',
  title: 'Login',
};

const RegisterPageOptions: StackNavigationOptions = {
  animation: 'fade',
  gestureEnabled: true,
  headerMode: 'screen',
  headerShown: false,
  headerTitle: 'Register Page',
  title: 'Register',
};

export default PagesNavigator;
