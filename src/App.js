import logo from './logo.svg';
import './App.css';
import FirstComponent from './Components/FirstComopnent/FirstComponent';
import { createContext, useState } from 'react';
import SecondComponent from './Components/SecondComponent/SecondComponent';
import FirstComponentChild from './Components/FirstComopnent/FirstComponentChild/FirstComponentChild';

const CountContext = createContext();

function App() {
  const [count, setCount]= useState(0);
  return (
    <CountContext.Provider value={{name:"Mir"}}>
      <div className="App">

        <h1>Home:{count}</h1>
        <button onClick={()=> setCount(count + 1)}>Increase</button>
        <button onClick={()=> setCount(count - 1)}>Decrease</button>
        <FirstComponent ></FirstComponent>
        <FirstComponentChild></FirstComponentChild>
        <SecondComponent></SecondComponent>
      </div>
    </CountContext.Provider>
    
  );
}

export default App;
