import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useCallback, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {Text} from 'react-native-gesture-handler';
import {GenderDropDownData} from '../../Util/Data/GenderDropDownData';

type GenderDropDownDataType = {
  id: number;
  genderName: string;
};

type GenderDropDownTypeRenderItemProp = {
  item: GenderDropDownDataType;
};

function RegisterPage(): React.JSX.Element {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('');
  const [genderDropDownVisible, setGenderDropDownVisible] = useState(false);
  const [genderDropDownSelected, setGenderDropDownSelected] = useState(
    GenderDropDownData[0]?.genderName,
  );
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const onGenderSelectionHandler = useCallback(
    (selectedGender: string) => {
      setGenderDropDownSelected(selectedGender);
      setGenderDropDownVisible(!genderDropDownVisible);
    },
    [genderDropDownVisible],
  );
  const GenderDropDownRenderItem = useCallback(
    (props: GenderDropDownTypeRenderItemProp) => {
      return (
        <Pressable
          disabled={false}
          onPress={() => {
            onGenderSelectionHandler(props?.item?.genderName);
          }}
          style={[styles.registerTextView, styles.genderDropDownRenderItemView]}
          testID="GenderDropDown_Pressable">
          <Text
            disabled={false}
            dataDetectorType={'all'}
            style={[
              styles.registerText,
              styles.registerButtonText,
              styles.genderDropDownRenderItemText,
            ]}
            testID="GenderName_Selectable_Text">
            {props?.item?.genderName}
          </Text>
        </Pressable>
      );
    },
    [onGenderSelectionHandler],
  );
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
      <Text
        disabled={false}
        dataDetectorType="all"
        style={[styles.registerTextView, styles.registerText]}
        testID="Register_Text">
        Register
      </Text>
      <Pressable
        disabled={false}
        onPress={() => {}}
        style={[styles.registerTextView, styles.profileView]}
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
      <KeyboardAvoidingView style={styles.registerPage} behavior="height">
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
          onChangeText={email => setEnteredEmail(email)}
          placeholder="Enter E-Mail"
          placeholderTextColor="black"
          spellCheck={true}
          textContentType="emailAddress"
          textAlign="left"
          textAlignVertical="bottom"
          verticalAlign="bottom"
          value={enteredEmail}
          style={[
            styles.registerTextView,
            styles.profileView,
            styles.enterEmailView,
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
          onChangeText={password => setEnteredPassword(password)}
          placeholder="Enter Password"
          placeholderTextColor="black"
          spellCheck={true}
          secureTextEntry={true}
          textAlign="left"
          textAlignVertical="bottom"
          textContentType="password"
          verticalAlign="bottom"
          value={enteredPassword}
          style={[
            styles.registerTextView,
            styles.profileView,
            styles.enterEmailView,
            styles.enterEmailText,
          ]}
          testID="Password_Input"
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
          onChangeText={password => setEnteredConfirmPassword(password)}
          placeholder="Enter Confirm Password"
          placeholderTextColor="black"
          spellCheck={true}
          secureTextEntry={true}
          textAlign="left"
          textAlignVertical="bottom"
          textContentType="password"
          verticalAlign="bottom"
          value={enteredConfirmPassword}
          style={[
            styles.registerTextView,
            styles.profileView,
            styles.enterEmailView,
            styles.enterEmailText,
          ]}
          testID="Confirm_Password_Input"
        />
        <Pressable
          disabled={false}
          onPress={() => setGenderDropDownVisible(!genderDropDownVisible)}
          style={[
            styles.registerTextView,
            styles.enterEmailView,
            styles.genderDropDownMainView,
            genderDropDownVisible && styles.genderDropDownMainViewLayout,
          ]}
          testID="Gender_DropDown_View">
          <Text
            disabled={false}
            dataDetectorType={'all'}
            style={[
              styles.registerText,
              styles.registerButtonText,
              styles.genderDropDownRenderItemText,
            ]}
            testID="GenderName_DropDown_Selected_Text">
            {genderDropDownSelected}
          </Text>
          <View
            style={styles.downArrowDropDownIconView}
            testID="Register_Down_Arrow_Icon_View">
            <Image
              source={
                genderDropDownVisible
                  ? require('../../Assets/Icons/ShopTalkUpArrowIcon.png')
                  : require('../../Assets/Icons/ShopTalkDownArrowIcon.png')
              }
              alt={genderDropDownVisible ? 'Up Arrow Icon' : 'Down Arrow Icon'}
              crossOrigin="use-credentials"
              loadingIndicatorSource={
                genderDropDownVisible
                  ? require('../../Assets/Icons/ShopTalkUpArrowIcon.png')
                  : require('../../Assets/Icons/ShopTalkDownArrowIcon.png')
              }
              blurRadius={0}
              style={styles.backIcon}
              resizeMode="center"
              width={Dimensions.get('window').width / 12}
              height={Dimensions.get('window').height / 25}
              testID={
                genderDropDownVisible
                  ? 'Register_Up_Arrow_Icon_Image'
                  : 'Register_Down_Arrow_Icon_Image'
              }
            />
          </View>
        </Pressable>
        {genderDropDownVisible && (
          <FlatList
            data={GenderDropDownData}
            renderItem={GenderDropDownRenderItem}
            horizontal={false}
            initialNumToRender={GenderDropDownData?.length}
            keyExtractor={item => item?.id?.toString()}
            pagingEnabled={false}
            scrollEnabled={true}
            style={[
              styles.registerTextView,
              styles.enterEmailView,
              styles.genderDropDownFlatlistView,
            ]}
            testID="Gender_DropDown_Flatlist"
          />
        )}
      </KeyboardAvoidingView>
      <Pressable
        disabled={false}
        onPress={() => {}}
        style={[styles.registerTextView, styles.registerButtonView]}
        testID="Register_Button">
        <Text
          disabled={false}
          dataDetectorType={'all'}
          style={[styles.registerText, styles.registerButtonText]}
          testID="Register_Button_Text">
          Register
        </Text>
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
  registerTextView: {
    alignSelf: 'center',
    marginVertical: 5,
  },
  registerText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'rgb(21, 144, 150)',
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  profileView: {
    width: Dimensions.get('window').width / 4,
    height: Dimensions.get('window').height / 8.75,
  },
  profileImage: {
    alignSelf: 'center',
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
  genderDropDownMainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 0,
    marginTop: 10,
  },
  genderDropDownMainViewLayout: {
    borderBottomWidth: 0,
  },
  genderDropDownFlatlistView: {
    maxHeight: Dimensions.get('window').height / 8,
    marginVertical: 0,
  },
  registerButtonView: {
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
  registerButtonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
    textTransform: 'none',
  },
  genderDropDownRenderItemView: {
    alignSelf: 'flex-start',
    marginVertical: 2,
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: Dimensions.get('window').width / 1.25,
    borderBottomWidth: 1.5,
    borderBottomColor: 'rgba(21, 144, 150, 0.7)',
  },
  genderDropDownRenderItemText: {
    marginVertical: 1.5,
    color: 'black',
    fontWeight: 'normal',
  },
  downArrowDropDownIconView: {
    width: Dimensions.get('window').width / 12,
    height: Dimensions.get('window').height / 25,
  },
});

export default RegisterPage;
