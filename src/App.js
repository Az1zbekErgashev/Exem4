
import './App.css';
import Sitebar from './sideBar/sitebar';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Sitebar/>
      <Outlet/>
    </div>
  );
}

export default App;
