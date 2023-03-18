import * as React from 'react';
import {View, Text} from 'react-native';
import {buildStylesheet} from '../utils/styles';

type Props = {
  title: string;
  styles?: Object;
};

export default function SectionHeader(props: Props) {
  const {title} = props || {};
  const styles = buildStylesheet('sectionHeader', props.styles);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{title}</Text>
    </View>
  );
}
