import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import PageSwitch from './components/app-router/index.js';
import { BrowserRouter } from 'react-router-dom';
import './App.css';




function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <div className="page">
        
        <Header/>
        
        <PageSwitch/>
        
        <Footer/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App
