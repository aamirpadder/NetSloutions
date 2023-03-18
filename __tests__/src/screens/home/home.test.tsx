/**
 * @format
 */

import 'react-native';
import React from 'react';
import {MoviesFeeds} from '../../../../src/screens/home/home';

import { render,screen } from "@testing-library/react-native";

it('shows an initial Movie List will be empty', () => {
const {getByTestId} =  render(<MoviesFeeds />);
  expect(getByTestId('MovieFlatList')).toBeDefined();
});
