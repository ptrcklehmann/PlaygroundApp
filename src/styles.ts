import {StyleSheet, useWindowDimensions} from 'react-native';

export const HEADER_HEIGHT = 250;
export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    height: HEADER_HEIGHT,
    width: '100%',
    backgroundColor: '#fb8500',
  },
  box: {
    height: 250,
    width: '100%',
  },
  box2: {
    height: 250,
    width: '100%',
    borderBottomColor: '#3d405b',
    borderBottomWidth: 1,
  },
  tabItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textAreaTitle: {
    alignSelf: 'flex-start',
    padding: 10,
  },
  textArea: {
    flex: 1,
    alignSelf: 'stretch',
    overflow: 'scroll',
  },
});
