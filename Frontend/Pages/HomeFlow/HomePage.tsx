import React from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';

function HomePage(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.homePage}>
      <Text>Home Page</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  homePage: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default HomePage;
