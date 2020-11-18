import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import ShopItem from './js/ShopItem.jsx';
import { item } from './js/item.js';



ReactDOM.render(<ShopItem item={ item } />, document.getElementById('root'));
registerServiceWorker();
