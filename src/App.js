import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Tick from './pages/Tick'
// import Greeting from './pages/greeting/Greeting'
import LoginControl from './pages/LogButton/LoginControl'
import NumberList from './pages/list/NumberList'
import Calculator from './pages/LiftStateUp/Calculator'
import WelcomeDialog from './pages/composition/WelcomeDialog'
import FilterableProductTable from './pages/filter/FilterableProductTable'
import Child from './pages/context/Child'
import {Provider, Consumer} from './AppContext'
import HocPage from './pages/HocPage/HocPage';
import HookPage from './pages/hooks/HookPage'
import UseReducerPage from './pages/useReducerPage/UseReducerPage'
import UseContextPage from './pages/UseContextPage'
function App() {
  const numbers = [1,2,3,4];
  const store = {
    user:{
      name:'tongtong'
    }
  }
  return (
    
    <div className="App">

      {/* <UseReducerPage></UseReducerPage> */}
      {/* <LoginControl></LoginControl> */}
      {/* <NumberList numbers = {numbers}/> */}
      {/* <Calculator/> */}
      {/* <WelcomeDialog/> */}
      {/* <FilterableProductTable></FilterableProductTable> */}
      {/* <Child {...store}></Child> */}
      {/* <Provider value = {store}> */}
        {/* <Child></Child> */}
        {/* <HocPage></HocPage>
         */}

      {/* </Provider> */}
      <Provider value= {store}>
      <UseContextPage></UseContextPage>
      </Provider>
     


    </div>
  );
}

export default App;
