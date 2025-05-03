import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Dimensions,
  ImageBackground,
  StatusBar,
  View,
} from 'react-native';

const MyStatusBar = ({backgroundColor}: {backgroundColor: string}) => (
  <View style={[styles.statusBarHeight, {backgroundColor}]}>
    <SafeAreaView>
      <StatusBar
        animated={true}
        backgroundColor={backgroundColor}
        barStyle="light-content"
        hidden={false}
        networkActivityIndicatorVisible={false}
        translucent={true}
      />
    </SafeAreaView>
  </View>
);

function HomePage(): React.JSX.Element {
  return (
    <View style={styles.homePage}>
      <MyStatusBar backgroundColor="rgb(5, 158, 242)" />
      <ImageBackground
        alt="Shop Talk Shopping Banner"
        blurRadius={6}
        borderBottomLeftRadius={10}
        borderBottomRightRadius={10}
        crossOrigin="use-credentials"
        loadingIndicatorSource={require('../../Assets/Images/ShopTalkShoppingBanner.png')}
        resizeMode="cover"
        resizeMethod="auto"
        source={require('../../Assets/Images/ShopTalkShoppingBanner.png')}
        style={styles.shoppingBanner}
        testID="Shop_Talk_Shopping_Banner" />
    </View>
  );
}

const styles = StyleSheet.create({
  homePage: {
    flex: 1,
  },
  shoppingBanner: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusBarHeight: {
    height: StatusBar.currentHeight,
  },
});

export default HomePage;
