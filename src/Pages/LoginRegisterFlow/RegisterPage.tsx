import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

function RegisterPage(): React.JSX.Element {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  return (
    <SafeAreaView style={styles.registerPage}>
      <Pressable
        disabled={false}
        onPress={() => navigation.goBack()}
        style={styles.backIconView}
        testID="Register_Back_Icon_View">
        <Image
          source={require('../../Assets/Icons/ShopTalkBackIcon.png')}
          alt="Back Icon"
          crossOrigin="use-credentials"
          loadingIndicatorSource={require('../../Assets/Icons/ShopTalkBackIcon.png')}
          blurRadius={0}
          style={styles.backIcon}
          resizeMode="center"
          width={Dimensions.get('window').width / 7.75}
          height={Dimensions.get('window').height / 24}
          testID="Register_Back_Icon"
        />
      </Pressable>
      <Pressable
        disabled={false}
        onPress={() => {}}
        style={[styles.backIconView, styles.profileView]}
        testID="Register_Profile_Image_View">
        <Image
          source={require('../../Assets/Images/ShopTalkProfileBoy.png')}
          alt="Profile Image"
          crossOrigin="use-credentials"
          loadingIndicatorSource={require('../../Assets/Images/ShopTalkProfileBoy.png')}
          blurRadius={0}
          style={styles.profileImage}
          resizeMode="center"
          width={Dimensions.get('window').width / 4}
          height={Dimensions.get('window').height / 8.75}
          testID="Register_Profile_Image"
        />
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  registerPage: {
    flex: 1,
    backgroundColor: 'white',
  },
  backIconView: {
    marginVertical: 5,
    marginHorizontal: 5,
    width: Dimensions.get('window').width / 7.75,
    height: Dimensions.get('window').height / 24,
  },
  backIcon: {
    alignSelf: 'flex-start',
  },
  profileView: {
    alignSelf: 'center',
    marginHorizontal: 0,
    width: Dimensions.get('window').width / 4,
    height: Dimensions.get('window').height / 8.75,
  },
  profileImage: {
    alignSelf: 'center',
  },
});

export default RegisterPage;
