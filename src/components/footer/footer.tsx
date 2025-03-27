import { useState, useEffect } from "react";
import sony from "../../assets/images/sony.webp";
import "./footer.css";

interface PartnerItem {
  id: number;
  img: string;
}

const Footer = () => {
  const partnerItems: PartnerItem[] = [
    { id: 1, img: sony },
    { id: 2, img: sony },
    { id: 3, img: sony },
    { id: 4, img: sony },
    { id: 5, img: sony },
    { id: 6, img: sony },
    { id: 7, img: sony },
    { id: 8, img: sony },
    { id: 9, img: sony },
    { id: 10, img: sony },
    { id: 11, img: sony },
    { id: 12, img: sony },
    { id: 13, img: sony },
    { id: 14, img: sony },
    { id: 15, img: sony },
  ];

  const [expanded, setExpanded] = useState(false);
  const [itemsToShow, setItemsToShow] = useState<number>(4);

  // On mount and resize, update the number of items to show:
  useEffect(() => {
    const updateItemsToShow = () => {
      setItemsToShow(window.innerWidth > 376 ? 5 : 4);
    };

    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  const visibleItems = expanded ? partnerItems : partnerItems.slice(0, itemsToShow);

  return (
    <footer className="footer">
      <h1 className="footer-title">JOB ADVERTISING PARTNER</h1>
      <ul className="footer-ul">
        {visibleItems.map((item) => (
          <li key={item.id} className="footer-items-image">
            <img src={item.img} className="footer-item-image" alt={`Partner ${item.id}`} loading="lazy" />
          </li>
        ))}
      </ul>

      {/* Expand/Collapse Toggle */}
      <div className="expand-toggle" onClick={() => setExpanded(!expanded)}>
        <svg
          width="26"
          height="13"
          viewBox="0 0 26 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="expand-chevron"
          style={{
            transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s",
          }}
        >
          <path d="M1 1L13 11L25 1" stroke="white" strokeWidth="2" />
        </svg>
      </div>

      <div className="footer-more">
        <p className="footer-more-text">GO TO ALL JOB ADVERTISING PARTNER</p>
        <svg
          width="39"
          height="36"
          viewBox="0 0 39 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 15L0 20L33 20V15L0 15Z" fill="white" />
          <path d="M19.001 34L35.001 18L19.001 2" stroke="white" strokeWidth="5" />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
