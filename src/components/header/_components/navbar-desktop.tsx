import "./navbar-desktop.css"

const NavbarDesktop = () => {

  const navbarDesktopItems = [
    { id: 1, text: 'Dummy Text'},
    { id: 2, text: 'Dummy Text'},
    { id: 3, text: 'Dummy Text'},
  ]
  return ( 
    <nav className="nav-desktop">
      <h1 className="nav-title">NEWS</h1>
      <p className="nav-desktop-date">2021.02.27</p>
      <ul className="nav-desktop-cntr">
        {navbarDesktopItems.map((item) => (
          <li key={item.id} className="nav-desktop-item">
            <p className="nav-desktop-item">{item.text}</p>
          </li>
        ))}
      </ul>
    </nav>
   );
}
 
export default NavbarDesktop;