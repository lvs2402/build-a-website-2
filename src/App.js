import './App.css';
import dog7 from './assets/dog7.jpg';





function App() {
  return (
    <div className="App bg-blue-200 h-screen flex items-center justify-center">
      <header className="App-header">
        <p className="text-2xl">
          Edit <code>src/Home.js</code> and save to reload.
        </p>
        <a
          className="App-link text-sm font-light"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          This is the weather-app starter code for Build a Website II
        </a>
      <img src={dog7}/>
      </header>
    </div>
  );
}

export default App;
