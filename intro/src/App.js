import React from 'react';
import './App.css';
import ShopItem from './js/ShopItem.jsx';
import { item } from '../src/js/item.js'


function App() {

  return <ShopItem item = {item} />
}

export default App;
