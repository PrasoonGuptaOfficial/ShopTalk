import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import PagesNavigator from './src/PagesNavigation/PagesNavigator';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <PagesNavigator />
    </NavigationContainer>
  );
}

export default App;
