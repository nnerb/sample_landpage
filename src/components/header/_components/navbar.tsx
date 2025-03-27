
const Navbar = () => {

  const navbarItems = [
    { id: 1, date: "2021.02.27", text: "Nam id tincidunt arcu. Suspendi...."},
    { id: 2, date: "2021.02.27", text: "Nam id tincidunt arcu. Suspendi...."},
    { id: 3, date: "2021.02.27", text: "Nam id tincidunt arcu. Suspendi...."},
  ]

  return ( 
    <nav className="nav">
      <h1 className="nav-title">NEWS</h1>
      <ul className="nav-cntr-item">
        {navbarItems.map((item) => (
          <li key={item.id} className="nav-item">
            <p className="nav-item-date">{item.date}</p>
            <p className="nav-item-text">{item.text}</p>
          </li>
        ))}
      </ul>
      <div className="nav-more">
        <p className="nav-more-text">MORE</p>
        <svg width="33" height="31" viewBox="0 0 33 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.468903 12.9687L0.468903 17.1874H28.3127V12.9687L0.468903 12.9687Z" fill="#B92013"/>
          <path d="M16.501 29L30.001 15.5L16.501 1.99999" stroke="#B92013" strokeWidth="4"/>
        </svg>
      </div>
    </nav>
   );
}
 
export default Navbar;