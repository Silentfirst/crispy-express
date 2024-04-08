import React from 'react'

export default function Nav({state}) {
  

    const [handleSignUp, handleIsLoggedIn, handleLogin ]= state; 


  const handleSignUpClick= ()=>{
    handleSignUp();  // bring sign up page
    handleIsLoggedIn(false);
    handleLogin(false);
    // code to create account  
  };

  const handleLoginClick=()=>{
    handleLogin();  // bring login page
    handleSignUp(false);  // bring sign up page
    handleIsLoggedIn(false); 
  };

  const handleFeedClick=()=>{
    handleIsLoggedIn(); // handle feed 
    handleSignUp();  // bring sign up page
    handleIsLoggedIn(false);
    handleLogin(false);
  };


  return (
    <nav className="navbar">
        <ul className="li"><button onClick={handleSignUpClick}>Signup</button></ul>
        <ul className="li"><button onClick={handleLoginClick}>Login</button></ul>
        <ul className="li"><button onClick={handleFeedClick}>Feed </button></ul>
    </nav>
  )
}
