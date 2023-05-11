import { Outlet, Link } from 'react-router-dom';
import styles from '../styles/NavBar.module.css';

function NavBar() {
  return (
    <>
      <nav className={styles.nav}>
        <ul>
          <li>Bookstore CMS</li>
          <li><Link to="/">BOOKS</Link></li>
          <li><Link to="/categories">CATEGORIES</Link></li>
        </ul>
        <div className={styles.profile} />
      </nav>
      <Outlet />
    </>
  );
}

export default NavBar;
