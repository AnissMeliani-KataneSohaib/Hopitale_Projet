import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Formateur from './maitre/Formateur';
import Pdf from './Formation/Pdf';
import Log from './Formation/Log'
import Login from './Formation/Login';
import Form from './Formation/Form';
// ...

const App = () => {

  return (
    
    <BrowserRouter>
    <Routes>
    <Route path='/dkhole' element={<Form/>}/>
    <Route path='/dkhol' element={<Formateur/>}/>
    <Route path='wach' element={<Login/>}/>
     <Route path='/' element={<Pdf/>}/>
     <Route path='/log/:id' element={<Log />}/>

    
     

    </Routes>
    </BrowserRouter>
    

    



    
  );
};

export default App;
