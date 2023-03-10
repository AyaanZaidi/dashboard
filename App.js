import logo from './logo.svg';
import './App.css';
import ResponsiveDrawer from './dashboard/board';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
      <ResponsiveDrawer/>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
