import './Navbar.css';
import logo from './img/logo.png';
import CartWidget from '../CartWidget/CartWidget';

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
                        <button>Pendrives</button>
                        <button>Perifericos</button>
                        <button>Accesorios para WiFi</button>
                        <button>Conectividad</button>
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