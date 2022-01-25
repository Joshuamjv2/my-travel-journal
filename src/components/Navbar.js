import '../css/navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Navbar(){
    return (
        <nav className="nav">
            <p className="nav--content"><span><FontAwesomeIcon icon="globe"/></span> my travel journal</p>
        </nav>
    )
}