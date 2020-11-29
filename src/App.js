import React from 'react';
import Signup from './pages/Signup';
import Signin from './pages/Signin'
import Navbar from './components/Navbar'

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Signin/>
    </div>
  );
}

export default App;
