// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// src/setupTests.js
import '@testing-library/jest-dom';
import { configure } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import { TextEncoder, TextDecoder } from 'util';
// Polyfill TextEncoder and TextDecoder
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;


configure({ adapter: new Adapter() });