import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Navbar } from './Components/navbar';
import { Acceuil } from './Components/Accueil';
import {Contact} from './Components/Contact'
import {Recrutement} from "./Components/Recrutement"
import {Infos} from "./Components/infos"
import { Login } from './Components/login';


function App() {
  return(
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Acceuil/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/Recrutement' element={<Recrutement/>}/>
          <Route path='/infos' element={<Infos/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
