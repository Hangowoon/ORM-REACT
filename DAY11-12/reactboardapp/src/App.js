import React from 'react';

//import logo from './logo.svg'
//import './App.css'

import Template from './Template';
import Template2 from './Template2';
import Template3 from './Template3';

function App() {
  return (
    <div className='App'>
      <Template>
        <Template2 onInsert={onInsert} onRemove={onRemove}></Template2>
        <Template3 onSelect={onSelect}></Template3>
      </Template>
    </div>
  );
}

export default App;
