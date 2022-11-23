import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleProp,
  Text,
  useColorScheme,
  View,
  ViewStyle,
} from 'react-native';
import React, {FC, useMemo, useState} from 'react';
import MasonryList from '@react-native-seoul/masonry-list';

export interface PicsumImage {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

const PicsumImageCard: FC<{item: PicsumImage; style: StyleProp<ViewStyle>}> = ({
  item,
  style,
}) => {
  const randomBool = useMemo(() => Math.random() < 0.5, []);

  return (
    <View
      key={item.id}
      style={[
        {marginTop: 12, flex: 1, borderRadius: 5, overflow: 'hidden'},
        style,
      ]}>
      <Image
        source={{uri: item.download_url}}
        style={{
          height: randomBool ? 150 : 280,
          alignSelf: 'stretch',
        }}
        resizeMode="cover"
      />
      <Text
        style={{
          color: '#390099',
          backgroundColor: '#f1c0e8',
          paddingVertical: 8,
          paddingHorizontal: 8,
          fontFamily: 'WorkSans-Medium',
        }}>
        Author: {item.author}
      </Text>
    </View>
  );
};


const MasoryLayout = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#14213d' : '#edede9',
    flex: 1,
  };
  const [picsumImages, setPicsumImages] = useState<PicsumImage[]>();
  fetch('https://picsum.photos/v2/list?page=5&limit=50')
  .then(res => res.json())
  .then((data: PicsumImage[]) => setPicsumImages(data));

  const renderItem = ({item, i}: {item: any; i: number}) => {
    return (
      <PicsumImageCard item={item} style={{marginLeft: i % 2 === 0 ? 0 : 12}} />
    );
  };
  if (!picsumImages) {
    return null;
  }
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          alignContent: 'center',
        }}>
        <MasonryList
          keyExtractor={(item: PicsumImage): string => item.id}
          ListHeaderComponent={<View />}
          contentContainerStyle={{
            paddingHorizontal: 24,
            alignSelf: 'stretch',
          }}
          numColumns={2}
          data={picsumImages}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

export default MasoryLayout;