import React from 'react';
import ReactDom from 'react-dom';
import { hot } from 'react-hot-loader/root';

import NumberBaseBall from'./NumberBaseball';

const Hot = hot(NumberBaseBall);

ReactDom.render(<Hot />, document.querySelector('#root'));

//ReactDom.createRoot(document.querySelector('#root')).render(<NumberBaseBall/>);
