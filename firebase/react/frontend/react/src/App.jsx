import { useState } from 'react';
import './App.css'  



function App() { 
  const getFile=async ()=>{
    const file = await fetch('http://localhost:3069/send');
    const blob = new Blob([await file.blob()], { type: 'application/pdf' });
    
    const fileUrl = window.URL.createObjectURL(blob);
    const aTag = document.createElement('a');
    aTag.href=fileUrl;
    aTag.download='audrey';
    document.body.appendChild(aTag);
    aTag.click();
    document.body.removeChild(aTag);
    
  }


  return (
    <> 
    <button onClick={getFile}>Download</button>
    </>
  );
}

export default App;
