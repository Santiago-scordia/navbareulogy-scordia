import logo from './logo.png';
import './App.css';

function App() {
  return (
    <>
      <header className="navbar-section">
      <div className='title'>
      <img src={logo} className="navbar__logo" alt="logo" />
      <h1>
          Ǝ U ᒧ O ⅁ Y
      </h1>
      </div>
      
        <nav>
            <ul class="nav__links">
                <li class="nav__item"><a class="nav__item" href="#chicos">Chicos</a></li>
                <li class="nav__item"><a class="nav__item" href="#medianos">Medianos</a></li>
                <li class="nav__item"><a class="nav__item" href="#grandes">Grandes</a></li>
            </ul>
        </nav>
      </header>
    </>
  );
}

export default App;
