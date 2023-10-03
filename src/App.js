
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './Controladores/login';
import Registro from './Pages/Registro';
import IniciarS from './Pages/Iniciar';

function App() {
  
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element = { <Registro />}/>
        <Route path='iniciar' element = { <IniciarS />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
