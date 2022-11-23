import {
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import React from 'react';

const Home = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#14213d' : '#edede9',
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          alignContent: 'center',
        }}>
        <Text>Home Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
