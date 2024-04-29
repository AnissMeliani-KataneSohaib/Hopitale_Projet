import './index.css';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Navbar } from './Components/navbar';
import { Acceuil } from './Components/Accueil';
import {Contact} from './Components/Contact'
import Recrutement from "./Components/Recrutement"
import {Infos} from "./Components/infos"

import { Login } from './Components/login';

import { AdminDashboard } from './Components/AdminDashboard';
import { Shownavbar } from './Components/Shownavbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import {LoginForm} from './Components/LoginForm'


function App() {
  return(
    
      <Router>
        <Shownavbar>
         <Navbar/>
        </Shownavbar>
        <Routes>
          <Route path='/' element={<Acceuil/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/Recrutement' element={<Recrutement/>}/>
          <Route path='/infos' element={<Infos/>}/>
          <Route path='/login' element={<LoginForm/>}/>
          {/* <Route path='/moderateur/login' element={<LoginForm/>}/> */}
          

          <Route path='/login' element={<Login/>}/>
          <Route path='/moderateur/login' element={<AdminDashboard/>}/>

        </Routes>
      </Router>
  )
}

export default App;
