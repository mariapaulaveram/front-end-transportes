import '../estilos/componentes/paginas/Servicios.css';
import React from "react";
import { Link } from 'react-router-dom';

const Servicios = (props)=> {
    return (
        <div className="holder">
            <div className="introduccion">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, laboriosam? Quis odio tempore est.
                    Rem
                    ab quasi qui, ea numquam fuga dignissimos saepe, porro, eveniet distinctio perferendis nesciunt
                    repellendus adipisci.
                </p>
            </div>
            <div className="nuestros_servicios">
                <h2>Nuestros Servicios</h2>
                <div className="servicios">
                    <div className="servicio"><Link to="/encomiendas" className={({isActive}) => isActive ? "activo" : undefined } >
                        <img src="images/servicios/encomiendas.jpg" alt="Encomiendas"/>
                        <h5>Encomiendas</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur id neque asperiores
                            sapiente
                            dolorem inventore porro atque quaerat deleniti cum.</p>
                             </Link>
                        
                    </div>
                    <div className="servicio">  <Link to="/almacenaje" className= {({isActive}) => isActive ? "activo" : undefined } >
                        <img src="images/servicios/almacenaje.jpg" alt="Almacenaje"/>
                        <h5>Almacenaje</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur id neque asperiores
                            sapiente
                            dolorem inventore porro atque quaerat deleniti cum. 
                           </p></Link>
                        
                    </div>
                    <div className="servicio"> <Link to="/carga" className= {({isActive}) => isActive ? "activo" : undefined } >
                        <img src="images/servicios/carga_completa.jpg" alt="Carga Completa"/>
                        <h5>Carga Completa</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur id neque asperiores
                            sapiente
                            dolorem inventore porro atque quaerat deleniti cum. 
                        </p></Link>
                    </div>
                    <div className="servicio"> <Link to="/pagoReembolso" className= {({isActive}) => isActive ? "activo" : undefined } >
                        <img src="images/servicios/pago_contrareembolso.jpg" alt="Pago pago_contrareembolso"/>
                        <h5>Pago contra reembolso</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur id neque asperiores
                            sapiente
                            dolorem inventore porro atque quaerat deleniti cum.  
                          
                        </p></Link>
                    </div>
                    <div className="servicio"> <Link to="/serviciosAMedida" className= {({isActive}) => isActive ? "activo" : undefined } >
                        <img src="images/servicios/servicios a medida.jpg" alt="Servicios a medida"/>
                        <h5>Servicios a medida</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur id neque asperiores
                            sapiente
                            dolorem inventore porro atque quaerat deleniti cum. 
                        </p></Link>
                    </div>
                    <div className="servicio"> <Link to="/congelados" className= {({isActive}) => isActive ? "activo" : undefined } >
                        <img src="images/servicios/congelados.jpg" alt="Congelados"/>
                        <h5>Congelados</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur id neque asperiores
                            sapiente
                            dolorem inventore porro atque quaerat deleniti cum. 
                        </p></Link>
                    </div>
                
                </div>
            </div>

 

            </div>
            
            
    );
    }
export default Servicios;