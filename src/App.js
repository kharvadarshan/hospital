
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import SideBar from './components/SideBar';
import { Route,Router,Routes } from 'react-router-dom';
import MainComponent from './components/MainComponent';
function App() {
  return (
      <>
       <NavBar/>
       <MainComponent/>
       </>
  );
}

export default App;
