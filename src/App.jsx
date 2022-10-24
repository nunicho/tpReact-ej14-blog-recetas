import {BrowserRouter, Routes, Route} from 'react-router-dom'
 import './App.css'
import Inicio from './components/views/Inicio'
import Administrador from './components/views/Administrador'
import Error404 from './components/views/Error404'
import Footer from './components/common/Footer'
import Menu from './components/common/Menu'
import CardReceta from './components/views/Receta/CardReceta'
import DetalleReceta from './components/views/DetalleReceta'
import ItemReceta from './components/views/Receta/ItemReceta'
import CrearReceta from './components/views/Receta/CrearReceta'
import EditarReceta from './components/views/Receta/EditarReceta'




function App() {
  return (
 <BrowserRouter>
 <Menu></Menu>
  <Routes>
    <Route exact path='/' element={<Inicio></Inicio>}></Route>
    <Route exact path='/Administrador' element={<Administrador></Administrador>}></Route>
    {/* <Route exact path='/Footer' element={<Footer></Footer>}></Route> */}
    {/* <Route exact path='/Menu' element={<Menu></Menu>}></Route> */}
    <Route exact path='/CardReceta' element={<CardReceta></CardReceta>}></Route>
    <Route exact path='/DetalleReceta/:id' element={<DetalleReceta></DetalleReceta>}></Route>
    <Route exact path='/ItemReceta' element={<ItemReceta></ItemReceta>}></Route>
    <Route exact path='/administrar/crear' element={<CrearReceta></CrearReceta>}></Route>
    <Route exact path='/administrar/editar/:id' element={<EditarReceta></EditarReceta>}></Route>
    <Route  path='*' element={<Error404></Error404>}></Route>
  </Routes>
 <Footer></Footer>
 </BrowserRouter>
  );
}

export default App;
