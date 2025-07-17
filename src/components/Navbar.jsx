import { NavLink } from 'react-router-dom';
import spacelineLogo from '../assets/images/WhiteLogo.png'; // spaceline logo path

export const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">
                        <img src={spacelineLogo} alt="Spaceline Logo" />
                    </NavLink>
                </li>
                
                <li>
                    <NavLink to="/">Inicio</NavLink>
                </li>

                <li>
                    <NavLink to="/about">Sobre Nosotros</NavLink>
                </li>

                <li>
                    <NavLink to="/services">Servicios</NavLink>
                </li>

                <li>
                    <NavLink to="/portfolio">Portafolio</NavLink>
                </li>
            </ul>
        </nav>
    )
};