import React from 'react';
import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeContainer';
import {Provider} from 'react-redux'
 import Store from './Redux/Store'
import HooksCakeContainer from './components/HooksCakeContainer';
import IcecreamContainer from './components/IcecreamContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';
function App() {
  return (
    <Provider store={Store}>
    <div className="App">     
      <UserContainer/>
      <ItemContainer cake/>
      <ItemContainer icecream/>
      <HooksCakeContainer/>
      <IcecreamContainer/>
      {/* <CakeContainer/> */}
    </div>
    </Provider>
  );
}

export default App;
