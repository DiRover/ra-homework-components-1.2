import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Menu from './js/Menu.jsx';
import { items } from './js/items.js';

//код ниже вставлен из задачи
const app = (
    <div>
      <Menu items={items} opened={true} />
      <Menu items={items} />
    </div>
  );
  
  ReactDOM.render(
    app,
    document.getElementById('root')
  ); 

//ReactDOM.render(<Menu items={ items } opened={ true } />, document.getElementById('root'));
registerServiceWorker();
