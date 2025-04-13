import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './Frontend/PagesNavigation/MainNavigator';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}

export default App;
