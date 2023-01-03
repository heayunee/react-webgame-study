import React from 'react';
import ReactDom from 'react-dom';
import { hot } from 'react-hot-loader/root';

//import NumberBaseBall from'./NumberBaseball';
import RenderTest from'./RenderTest';

//const Hot = hot(NumberBaseBall);
const Hot = hot(RenderTest);

ReactDom.render(<Hot />, document.querySelector('#root'));

//ReactDom.createRoot(document.querySelector('#root')).render(<NumberBaseBall/>);
