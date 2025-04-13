import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import PagesNavigator from './Frontend/PagesNavigation/PagesNavigator';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <PagesNavigator />
    </NavigationContainer>
  );
}

export default App;
