import { useState } from 'react';
import './App.css'  
import Sign from './components/Sign';
import Login from './components/Login';
import Feed from './components/Feed'
import Nav from './components/Nav';



function App() { 
  const [signUp, setSignUp ] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [login, setLogin] = useState(true);

  const handleSignUp= (value)=>{
    setSignUp(value ?? !signUp);
  }
  const handleIsLoggedIn = (value)=>{
    setIsLoggedIn(value ?? !isLoggedIn);
  }
  const handleLogin = (value)=>{
    setLogin(value ?? !login);
  }

  const stateProps= [handleSignUp, handleIsLoggedIn, handleLogin];

  return (
    <> 
      <Nav state={stateProps}/>   
      {signUp && < Sign state={stateProps} />}
      {login && < Login state={stateProps} /> }
      {isLoggedIn && < Feed state={stateProps} /> }
    </>
  );
}

export default App;
