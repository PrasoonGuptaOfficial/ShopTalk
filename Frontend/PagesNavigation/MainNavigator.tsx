import React from 'react';
import LoginRegisterNavigator from './LoginRegisterNavigator';
import HomeNavigator from './HomeNavigator';

function MainNavigator(): React.JSX.Element {
  let loginFlag = true;
  return loginFlag ? <HomeNavigator /> : <LoginRegisterNavigator />;
}

export default MainNavigator;
