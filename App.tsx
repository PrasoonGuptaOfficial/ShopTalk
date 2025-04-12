import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';

function App(): React.JSX.Element {
  const [enterEmail, setEnterEmail] = useState('');
  const [enterPassword, setEnterPassword] = useState('');
  return (
    <SafeAreaView style={styles.mainApp}>
      <Image
        source={require('./src/Assets/Images/ShopTalkMainLogo.png')}
        loadingIndicatorSource={require('./src/Assets/Images/ShopTalkMainLogo.png')}
        alt="Shop Talk Logo"
        style={styles.mainLogo}
        blurRadius={0}
        crossOrigin="use-credentials"
        resizeMode="center"
        height={Dimensions.get('window').height / 6}
        width={Dimensions.get('window').width / 2.5}
        testID="ShopTalk_Main_Logo_Image"
      />
      <Text
        disabled={false}
        dataDetectorType={'all'}
        style={[styles.mainLogo, styles.loginText]}
        testID="Login_Text">
        Login
      </Text>
      <KeyboardAvoidingView style={styles.mainApp} behavior="height">
        <TextInput
          autoComplete="email"
          autoCorrect={false}
          autoFocus={true}
          defaultValue="E-Mail"
          editable={true}
          inputMode="email"
          keyboardAppearance="default"
          keyboardType="email-address"
          maxLength={30}
          multiline={false}
          numberOfLines={1}
          onChangeText={email => setEnterEmail(email)}
          placeholder="Enter E-Mail"
          placeholderTextColor="black"
          spellCheck={true}
          textContentType="emailAddress"
          textAlign="left"
          textAlignVertical="bottom"
          verticalAlign="bottom"
          value={enterEmail}
          style={[
            styles.mainLogo,
            styles.enterEmailView,
            styles.loginText,
            styles.enterEmailText,
          ]}
          testID="Email_Input"
        />
        <TextInput
          autoComplete="password"
          autoCorrect={false}
          autoFocus={true}
          defaultValue="Password"
          editable={true}
          inputMode="text"
          keyboardAppearance="default"
          keyboardType="visible-password"
          maxLength={12}
          multiline={false}
          numberOfLines={1}
          onChangeText={password => setEnterPassword(password)}
          placeholder="Enter Password"
          placeholderTextColor="black"
          spellCheck={true}
          secureTextEntry={true}
          textAlign="left"
          textAlignVertical="bottom"
          textContentType="password"
          verticalAlign="bottom"
          value={enterPassword}
          style={[
            styles.mainLogo,
            styles.enterEmailView,
            styles.loginText,
            styles.enterEmailText,
          ]}
          testID="Password_Input"
        />
      </KeyboardAvoidingView>
      <Pressable
        disabled={false}
        onPress={() => {}}
        style={[styles.mainLogo, styles.loginButtonView]}
        testID="Login_Button">
        <Text
          disabled={false}
          dataDetectorType={'all'}
          style={[styles.loginText, styles.loginButtonText]}
          testID="Login_Button_Text">
          Login
        </Text>
      </Pressable>
      <Text
        disabled={false}
        dataDetectorType={'all'}
        style={[
          styles.loginText,
          styles.loginButtonText,
          styles.registerButtonText,
        ]}
        testID="Register_Button_Text">
        Need to Register?{' '}
        <Text
          onPress={() => {}}
          style={styles.registerButtonUnderLineText}
          testID="Register_Button_Text_Press">
          Register Here
        </Text>
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainApp: {
    flex: 1,
  },
  mainLogo: {
    alignSelf: 'center',
    marginVertical: 5,
  },
  loginText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'rgb(21, 144, 150)',
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  enterEmailView: {
    width: Dimensions.get('window').width / 1.2,
    height: Dimensions.get('window').height / 20,
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: 'rgba(21, 144, 150, 0.5)',
    paddingHorizontal: 5,
    marginVertical: 10,
  },
  enterEmailText: {
    textAlign: 'left',
    fontSize: 15,
    color: 'black',
    fontWeight: 'regular',
    textTransform: 'none',
  },
  loginButtonView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width / 1.2,
    height: Dimensions.get('window').height / 20,
    borderWidth: 1.5,
    borderRadius: 15,
    borderColor: 'rgba(21, 144, 150, 1)',
    backgroundColor: 'rgba(21, 144, 150, 0.7)',
    marginBottom: 10,
  },
  loginButtonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
    textTransform: 'none',
  },
  registerButtonText: {
    fontSize: 12,
    color: 'black',
    fontWeight: '400',
    marginBottom: 10,
  },
  registerButtonUnderLineText: {
    textDecorationLine: 'underline',
  },
});

export default App;
