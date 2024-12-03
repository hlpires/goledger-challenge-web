import Link from 'next/link';
import './styles.css'; 

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <h1>
          <Link href="/">GoLedger Music</Link>
        </h1>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link href="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link href="/artists" className="nav-link">Artists</Link>
          </li>
          <li className="nav-item">
            <Link href="/albums" className="nav-link">Albums</Link>
          </li>
          <li className="nav-item">
            <Link href="/songs" className="nav-link">Songs</Link>
          </li>
          <li className="nav-item">
            <Link href="/playlists" className="nav-link">Playlists</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
