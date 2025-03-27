import "./header.css"
import buildings from "../../assets/images/buildings.webp"
import buildings2x from "../../assets/images/buildings2x.webp"
import NavbarDesktop from "./_components/navbar-desktop";

const Header = () => {
  return ( 
    <header className="header-container" role="banner">
      <div className="header-content">
        <div className="header-title">
          <span className="header-item">EVERY</span>
          <span className="header-item">BIT</span>
          <span className="header-item">AMP.</span>
        </div>
        <div className="header-cntr-img">
          <img 
            src={buildings} 
            className="header-img" 
            srcSet={`${buildings} 1x, ${buildings2x} 2x`}
            alt="City buildings"
            loading="lazy"
          />
        </div>
      </div>
      <div className="header-scroll">
        <p className="header-scroll-title">SCROLL</p>
        <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="header-scroll-svg">
          <path d="M12.6081 0H9.59265V18.8467H12.6081V0Z" fill="white"/>
          <path d="M2 11.1314L11.1001 20.2315L20.2002 11.1314" stroke="white" strokeWidth="3"/>
        </svg>
      </div>
      <nav aria-label="Primary Navigation">
        <NavbarDesktop />
      </nav>
    </header>
   );
}
 
export default Header;