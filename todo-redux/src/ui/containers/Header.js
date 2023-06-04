import {Link} from "react-router-dom";
// Style
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
        <div className="container">
            <header className="d-flex justify-content-center py-3">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link to='/' className="nav-link active">Главная</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/about' className="nav-link">О нас</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/contact' className="nav-link">Контакты</Link>
                    </li>
                </ul>
            </header>
        </div>)
}

export default Header;