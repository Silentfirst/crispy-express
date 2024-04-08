import { useState } from 'react';
import './App.css' 
import axios from 'axios'; // Import axios library



function App() { 

  const handleDownload = async () => {
    try {
      const response = await axios.get('http://localhost:3069/send', { responseType: 'blob' }); // Set responseType to 'blob' to receive binary data
      const blob = new Blob([response.data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'audrey.pdf'; // Set the desired file name
      document.body.appendChild(a);
      a.click();  
      document.body.removeChild(a)
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  return (
    <div>
      <h1>Download PDF</h1>
      <button onClick={handleDownload}>
        Download
      </button>
    </div>
  );
}

export default App;
