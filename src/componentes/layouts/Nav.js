import '../../estilos/componentes/layout/Nav.css'
import { NavLink } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';





const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul class="holder">
                    {/* <li><NavLink to="/" className={({isActive}) => isActive ? "activo" : undefined } >Home</NavLink></li> */}
                    {/*<li><NavLink to="/nosotros" className={({isActive}) => isActive ? "activo" : undefined } >Nosotros</NavLink></li>*/}
                    <li>
                        <Dropdown>
                            <Dropdown.Toggle variant="link" id="dropdown-nosotros" className="nav-link sin-flecha texto-blanco">
                                NOSOTROS
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item variant="link" as={NavLink} to="/quienes"className={({ isActive }) => isActive ? "item-nosotros activo" : "item-nosotros"}>Quiénes Somos</Dropdown.Item>
                                <Dropdown.Item variant="link" as={NavLink} to="/historia"className={({ isActive }) => isActive ? "item-nosotros activo" : "item-nosotros"}>Reseña Histórica</Dropdown.Item>
                                <Dropdown.Item variant="link" as={NavLink} to="/nosotros"className={({ isActive }) => isActive ? "item-nosotros activo" : "item-nosotros"}>Nuestros Clientes</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                    <li><NavLink to="/novedades" className={({ isActive }) => isActive ? "activo" : undefined} >Novedades</NavLink></li>
                    <li><NavLink to="/contacto" className={({ isActive }) => isActive ? "activo" : undefined} >Contacto</NavLink></li>
                    <li><NavLink to="/servicios" className={({ isActive }) => isActive ? "activo" : undefined} >Servicios</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}
export default Nav;
