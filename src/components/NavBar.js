import { Outlet, Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <nav className="nav">
        <div>Bookstore CMS</div>
        <ul>
          <li><Link to="/">BOOKS</Link></li>
          <li><Link to="/categories">CATEGORIES</Link></li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default NavBar;
