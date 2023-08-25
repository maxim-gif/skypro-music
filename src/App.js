import MainNav from './components/MainNav/MainNav.js'
import Bar from './components/bar/Bar.js'
import Sidebar from './components/Sidebar/Sidebar.js'
import CenterBlock from './components/CenterBlock/CenterBlock.js'
import './App.css';
import React from 'react';
const { useState, useEffect } = React;

function App() {

  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
       <div className="container">
        <main className="main">
          <MainNav/>
          <CenterBlock isLoading={isLoading}/>
          <Sidebar isLoading={isLoading}/>
        </main>
        <Bar isLoading={isLoading}/>
        <footer className="footer"></footer>
       </div>
      </div>
    </div>
  );
}

export default App;
