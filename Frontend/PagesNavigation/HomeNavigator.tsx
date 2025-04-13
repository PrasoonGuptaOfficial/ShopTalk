import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import HomePage from '../Pages/HomeFlow/HomePage';

function HomeNavigator(): React.JSX.Element {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="HomePage">
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={homePageOptions}
      />
    </Stack.Navigator>
  );
}

const homePageOptions: StackNavigationOptions = {
  animation: 'fade',
  gestureEnabled: true,
  headerMode: 'screen',
  headerShown: false,
  headerTitle: 'Home Page',
  title: 'Home',
};

export default HomeNavigator;
