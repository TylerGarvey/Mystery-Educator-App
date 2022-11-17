import './App.css';
import PageSwitch from './components/app-router/index.js';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="page">
        <PageSwitch/>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App
