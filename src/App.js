
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";



import Header from "./componentes/layouts/Header";
import Nav from "./componentes/layouts/Nav";
import Footer from "./componentes/layouts/Footer";



import Contacto from "./paginas/Contacto";
import Home from "./paginas/Home";
import Nosotros from "./paginas/Nosotros";
import Novedades from "./paginas/Novedades";
import Servicios from "./paginas/Servicios";
import QuienesSomos from './paginas/QuienesSomos';
import Historia from './paginas/Historia';
import Encomiendas from './paginas/Encomiendas';
import Almacenaje from './paginas/Almacenaje';
import CargaCompleta from './paginas/CargaCompleta';
import PagoReembolso from './paginas/PagoReembolso';
import ServiciosAMedida from './paginas/ServiciosAMedida';
import Congelados from './paginas/Congelados';

function App() {
  return (
    <div className="App">
     <Header/>

     <BrowserRouter>
     <Nav/>
    
     <Routes>
    <Route path="/" element={<Home />} />
    <Route path="nosotros" element={<Nosotros/>} />
    <Route path="novedades" element={<Novedades/>} />
    <Route path="contacto" element={<Contacto/>} />
    <Route path="servicios" element={<Servicios/>} />
    <Route path="quienes" element={<QuienesSomos/>} />
    <Route path="historia" element={<Historia/>} />
    <Route path="encomiendas" element={<Encomiendas/>} />
    <Route path="almacenaje" element={<Almacenaje/>} />
    <Route path="carga" element={<CargaCompleta/>} />
    <Route path="pagoReembolso" element={<PagoReembolso/>} />
    <Route path="serviciosAMedida" element={<ServiciosAMedida/>} />
    <Route path="congelados" element={<Congelados/>} />
     </Routes>
     </BrowserRouter>
     
     <Footer/>
  
    </div>
  );
}


export default App;



