import './App.css';
import Navbar from './components/Navbar/navbar';
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './Routes';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar/>
        <AllRoutes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
