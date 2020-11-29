import React from 'react';
import AppRouter from './Router.js/Router'
import AuthContextProvider from './context/AuthContext'

function App() {
  
  return (
    <div className="App">
     <AuthContextProvider>
     <AppRouter/>
     </AuthContextProvider>
    </div>
  );
}

export default App;
