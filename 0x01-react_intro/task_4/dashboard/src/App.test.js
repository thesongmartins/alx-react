// src/App.test.js
import React from 'react';
import { shallow } from 'enzyme';
import App from './App.js';

describe('App Component', () => {
    it('renders without crashing', () => {
        shallow(<App />);
    });

    it('renders a div with the class App-header', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App-header')).toHaveLength(1);
    });

    it('renders a div with the class App-body', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App-body')).toHaveLength(1);
    });

    it('renders a div with the class App-footer', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App-footer')).toHaveLength(1);
    });
});