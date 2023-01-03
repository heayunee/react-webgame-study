const React = require('react');
const ReactDom = require('react-dom');
const { hot } = require('react-hot-loader/root');

const NumberBaseball = require('./NumberBaseball');

const Hot = hot(NumberBaseball);

ReactDom.render(<Hot />, document.querySelector('#root'));

/*
* ES6 문법 : import 사용
import React from 'react';
import ReactDom from 'react-dom';
import { hot } from 'react-hot-loader/root';

import NumberBaseball from './NumberBaseball';

const Hot = hot(NumberBaseball);

ReactDom.render(<Hot />, document.querySelector('#root'));
* */
