
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home';
import Contato from './Pages/contato/contato';
import Fotos from './Pages/fotos/fotos';
import Detalhes from './Pages/detalhes/detalhes';
import Comentarios from './Pages/comentarios/comentarios';






function App() {



  return (

   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/contato' element={<Contato/>} />
    <Route path='/fotos' element={<Fotos/>} />
    <Route path='/comentarios' element={<Comentarios/>} />

   </Routes>
   </BrowserRouter>
  
    

  );
}

export default App;
