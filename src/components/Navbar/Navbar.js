import './Navbar.css';
import logo from './img/logo.png';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () =>{
    return (
        <nav>
            <div class="ContenidoNav">
                <div id="logoSuperior">
                    <img src={logo}></img>
                </div>
                <div class="menu">
                    <h1>Tienda Online - RDC Internet y TV</h1>
                    <div class="menuBotones">
                        <Link to={'/category/Routers'}>Routers</Link>
                        <Link to={'/category/Repetidores'}>Repetidores</Link>
                        <Link to={'/category/Camaras'}>Camaras</Link>
                        <Link to={'/category/Adaptadores'}>Adaptadores</Link>
                    </div>
                </div>
                <div class="Cart">
                    <CartWidget></CartWidget>
                </div>
            </div>
        </nav>
    )
}

export default Navbar