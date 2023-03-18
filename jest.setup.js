import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import 'react-native-gesture-handler/jestSetup';

jest.autoMockOn();
jest.mock('react-native-pixel-perfect', ()=>jest.fn());
jest.mock('@react-navigation/native');
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
