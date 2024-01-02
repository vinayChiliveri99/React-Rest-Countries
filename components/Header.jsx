import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkMode } from '../src/App';

import moon from '../src/assets/moon-outline.svg';
import darkMoon from '../src/assets/moon-dark.svg';

function Header() {
  const { mode, setMode } = useContext(DarkMode);

  function handleMode() {
    mode == 'light' ? setMode('dark') : setMode('light');
    document.body.classList.toggle('dark-mode-background');
  }

  return (
    <div className={'heading ' + mode}>
      <Link
        to="/"
        style={{
          textDecoration: 'none',
          color: 'inherit',
        }}
      >
        <h1 id="where-heading">Where in the World?</h1>
      </Link>
      <div className="dark-mode" id="darkMode">
        {mode === 'light' ? (
          <img id="dark-mode-img" src={moon} alt="darkmode-image" />
        ) : (
          <img
            id="dark-mode-img"
            src={darkMoon}
            alt="darkmode-image"
          />
        )}
        <a onClick={handleMode} href="#" id="dark-link">
          Dark Mode
        </a>
      </div>
    </div>
  );
}

export default Header;
