import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
// import 'react-native-gesture-handler/jestSetup';
import axios from 'axios';

jest.mock('axios');

jest.autoMockOn();
jest.mock('react-native-pixel-perfect', () => ({
  create: value => jest.fn().mockReturnValue(value),
}));
jest.mock('@react-navigation/native', () => ({useNavigate: () => jest.fn()}));
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
jest.mock('react-redux', () => ({
  useSelector: jest.fn(fn => fn()),
}));

jest.doMock('react-native', () => ({
  Dimensions: {
    get: (width, height) => jest.fn().mockReturnValue({width, height}),
  },
  StyleSheet: {
    create: () => ({}),
  },
}));

// jest.doMock('axios', () => ({
//   get: jest.fn(url => {
//     if (url === '/something') {
//       return Promise.resolve({
//         data: 'data',
//       });
//     }
//   }),
//   post: jest.fn(url => {
//     if (url === '/something') {
//       return Promise.resolve({
//         data: 'data',
//       });
//     }
//     if (url === '/something2') {
//       return Promise.resolve({
//         data: 'data2',
//       });
//     }
//   }),
//   create: jest.fn(function () {
//     return this;
//   }),
// }));
