import React from 'react';
import ReactDom from 'react-dom';
import { hot } from 'react-hot-loader/root';

import NumberBaseball from './NumberBaseball';

const Hot = hot(NumberBaseball);

ReactDom.render(<Hot />, document.querySelector('#root'));
