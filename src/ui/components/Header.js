function Header() {
    return (
        <div className="container">
            <header className="d-flex justify-content-center py-3">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a href="/" className="nav-link active" aria-current="page">Главная</a>
                    </li>
                    <li className="nav-item">
                        <a href="/about" className="nav-link">О нас</a>
                    </li>
                    <li className="nav-item">
                        <a href="/contact" className="nav-link">Контакты</a>
                    </li>
                </ul>
            </header>
        </div>)
}

export default Header;