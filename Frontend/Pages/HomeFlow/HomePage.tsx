import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Dimensions,
  ImageBackground,
  Text,
} from 'react-native';

function HomePage(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.homePage}>
      <ImageBackground
        alt="Shop Talk Shopping Banner"
        blurRadius={10}
        borderBottomLeftRadius={10}
        borderBottomRightRadius={10}
        crossOrigin="use-credentials"
        loadingIndicatorSource={require('../../Assets/Images/ShopTalkShoppingBanner.png')}
        resizeMode="cover"
        resizeMethod="auto"
        source={require('../../Assets/Images/ShopTalkShoppingBanner.png')}
        style={styles.shoppingBanner}
        testID="Shop_Talk_Shopping_Banner">
        <Text>Text 1</Text>
        <Text>Text 2</Text>
        <Text>Text 3</Text>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  homePage: {
    flex: 1,
    backgroundColor: 'white',
  },
  shoppingBanner: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default HomePage;
