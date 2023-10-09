
 import  React from 'react';
import logo from './logo.svg';
import './App.css';

import Income from './compoents/Income';
import Expense from './compoents/Expense';
import Target from './compoents/Target';



function App() {
  return ( <div className="App">
      
      <Income />
      <Expense />
      <Target />
    </div>
  );
}
export default App;