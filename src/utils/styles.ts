//
import {StyleSheet} from 'react-native';
import _ from 'lodash';
import {colors} from './constants';

export const styles = {
  avatar: StyleSheet.create({
    container: {
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 0.5,
      shadowRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      position: 'absolute',
    },
    noShadow: {
      shadowOpacity: 0,
    },
  }),
  commentItem: StyleSheet.create({
    container: {
      flexDirection: 'row',
      flex: 1,
      alignItems: 'flex-start',
      paddingTop: 12,
      paddingBottom: 12,
      paddingRight: 15,
      paddingLeft: 15,
      borderBottomColor: '#DADFE3',
      borderBottomWidth: 1,
    },
    commentText: {
      flex: 1,
      marginLeft: 5,
      paddingTop: 3,
      flexDirection: 'row',
      flexWrap: 'wrap',
      color: colors.blackLight,
    },
    commentAuthor: {
      fontWeight: '700',
      fontSize: 14,
      color: colors.blackLight
    },
    commentContent: {
      fontSize: 14,
      color: colors.blackLight
    },
    commentTime: {
      fontSize: 14,
      color: '#95A4AD',
    },
  }),
  sectionHeader: StyleSheet.create({
    container: {
      height: 30,
      backgroundColor: '#F5F5F5',
      borderBottomWidth: 1,
      borderBottomColor: '#DADFE3',
      paddingLeft: 15,
      paddingRight: 15,
      flexDirection: 'row',
      alignItems: 'center',
    },
    label: {
      fontSize: 13,
      color: '#69747A',
    },
  }),
  commentBox: StyleSheet.create({
    container: {
      flex: 1,
      shadowOffset: {width: 0, height: -3},
      shadowColor: 'black',
      shadowOpacity: 0.1,
      backgroundColor: 'white',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 15,
    },
    textInput: {
      flex: 1,
      marginLeft: 25,
      fontSize: 16,
      color: '#364047',
    },
  }),
};

export function getStyle(styleName) {
  return styles[styleName] || {};
}

export function updateStyle(styleName, styleOverwrites) {
  styles[styleName] = buildStylesheet(styleName, styleOverwrites);
}

export function buildStylesheet(styleName, styleOverwrites) {
  const baseStyle = getStyle(styleName);
  if (!styleOverwrites || Object.keys(styleOverwrites).length === 0) {
    return baseStyle;
  }

  const base = Object.keys(baseStyle)
    .map(k => ({[k]: StyleSheet.flatten(baseStyle[k])}))
    .reduce((accumulated, v) => Object.assign(accumulated, v), {});

  const styleKeysExceptStyleName = Object.keys(styles).filter(
    k => k !== styleName,
  );
  const topLevelOverwrites = Object.keys(styleOverwrites)
    .filter(k => !styleKeysExceptStyleName.includes(k))
    .map(k => ({[k]: StyleSheet.flatten(styleOverwrites[k])}))
    .reduce((accumulated, v) => Object.assign(accumulated, v), {});

  return StyleSheet.create(_.defaultsDeep(topLevelOverwrites, base));
}
