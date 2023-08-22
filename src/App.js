import MainNav from './components/MainNav.js'
import Bar from './components/Bar.js'
import Sidebar from './components/Sidebar.js'
import CenterBlock from './components/CenterBlock.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
       <div className="container">
        <main className="main">
          <MainNav/>
          <CenterBlock/>
          <Sidebar/>
        </main>
        <Bar/>
        <footer className="footer"></footer>
       </div>
      </div>
    </div>
  );
}

export default App;
