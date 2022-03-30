import logo from './logo.png';
import './App.css';

function Navbar() {
  return (
    <>
      <header class="navbar-section">
      <div class='title'>
      <img src={logo} class="navbar__logo" alt="logo" />
      <h1>
          Ǝ U ᒧ O ⅁ Y
      </h1>
      </div>
      
        <nav>
            <ul class="nav__links">
                <li class="nav__item"><a class="nav__item" href="#chicos">Categoria 1</a></li>
                <li class="nav__item"><a class="nav__item" href="#medianos">Categoria 2</a></li>
                <li class="nav__item"><a class="nav__item" href="#grandes">Categoria 3</a></li>
                <li class="nav__item"><a class="nav__item" href="#grandes">Categoria 4</a></li>
            </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
