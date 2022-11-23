import {
  Image,
  SafeAreaView,
  StatusBar,
  useColorScheme,
  useWindowDimensions,
  View,
} from 'react-native';
import React, { useState} from 'react';
import styles, {HEADER_HEIGHT} from '../styles';
import {
  TabBarProps,
  Tabs,
  MaterialTabBar,
} from 'react-native-collapsible-tab-view';

const Header = () => {
  return <View pointerEvents="none" style={styles.header} />;
};

const tabBar = (props: TabBarProps) => (
  <MaterialTabBar
    {...props}
    scrollEnabled
    contentContainerStyle={{
      justifyContent: 'space-around',
    }}
    indicatorStyle={{
      backgroundColor: '#7209b7',
      height: 2,
      width: '50%',
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0,
      shadowRadius: 0,
      elevation: 0,
    }}

    style={{backgroundColor: '#FFF'}}
  />
);
const CollapsableHeader = () => {
  const {width} = useWindowDimensions();
  const isDarkMode = useColorScheme() === 'dark';
  const [picsumImages, setPicsumImages] = useState();
  fetch('https://picsum.photos/v2/list?page=21&limit=15')
    .then(res => res.json())
    .then(data => setPicsumImages(data));

  const renderItem = ({item}: {item: any}) => {
    return (
      <View style={[styles.box, {width}]}>
        <Image
          source={{uri: item.download_url, width, height: HEADER_HEIGHT}}
          style={{
            alignSelf: 'stretch',
          }}
          resizeMode="cover"
        />
      </View>
    );
  };

  if (!picsumImages) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Tabs.Container
        headerContainerStyle={{
          shadowColor: 'none',
          width: width,
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0,
          shadowRadius: 0,
          elevation: 0,
        }}
        renderTabBar={tabBar}
        renderHeader={Header}
        headerHeight={HEADER_HEIGHT} // optional
      >
        <Tabs.Tab name="Picsum">
          <Tabs.FlatList
            data={picsumImages}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </Tabs.Tab>
        <Tabs.Tab name="Another Tab">
          <View style={[styles.box2, {width}]}></View>
        </Tabs.Tab>
        <Tabs.Tab name="Another Tab tab">
          <View style={[styles.box2, {width}]}></View>
        </Tabs.Tab>
      </Tabs.Container>
    </SafeAreaView>
  );
};

export default CollapsableHeader;
