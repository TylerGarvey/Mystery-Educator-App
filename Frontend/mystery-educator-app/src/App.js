
import Header from './components/header/Header';
import PageSwitch from '.'
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import './style.css';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <div className="page">
        <Header/>
        <PageSwitch/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
