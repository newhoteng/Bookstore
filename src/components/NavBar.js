import { Outlet, Link } from 'react-router-dom';
import { ImUser } from 'react-icons/im';
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
        <div className={styles.profile}><ImUser className={styles.userIcon} /></div>
      </nav>
      <Outlet />
    </>
  );
}

export default NavBar;
