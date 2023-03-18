import React from 'react';
import {StyleSheet, View} from 'react-native';
import { colors } from '../utils/constants';

export const Card = (props: any) => {
  return <View style={style.card}>{props.children}</View>;
};

const style = StyleSheet.create({
  card: {
    backgroundColor: colors.WHITE_COLOR,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 2,
    margin: 10,
    borderRadius: 5,
  },
});
