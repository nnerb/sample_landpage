import { useState, MouseEvent } from "react";
import first from "../../assets/images/first.png";
import second from "../../assets/images/second.png";
import third from "../../assets/images/third.png";
import fourth from "../../assets/images/fourth.png";
import first2x from "../../assets/images/first2x.png";
import second2x from "../../assets/images/second2x.png";
import third2x from "../../assets/images/third2x.png";
import fourth2x from "../../assets/images/fourth2x.png";
import "./works.css";

interface WorkItem {
  id: number;
  title: string;
  description: string;
  image1x: string;
  image2x: string;
}

const worksItems: WorkItem[] = [
  { id: 1, title: "Ｎ／Ａ", description: "本田技研工業株式会社様", image1x: first, image2x: first2x },
  { id: 2, title: "ネイルチュートリアルＤＶＤ制作", description: "某大手美容品会社様", image1x: second, image2x: second2x },
  { id: 3, title: "ＮＥＣの空港ソリューション", description: "日本電気（株）様", image1x: third, image2x: third2x },
  { id: 4, title: "ＭＶＲｘＡＦＡ", description: "ＳＯＮＹ（株）様", image1x: fourth, image2x: fourth2x },
];

const Works = () => {
  const [selectedItem, setSelectedItem] = useState<WorkItem | null>(null);

  const handleOpen = (item: WorkItem) => {
    setSelectedItem(item);
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <>
      <section className="works">
        <div className="works-content">
          <h1 className="works-title">WORKS</h1>
          <ul className="works-ul">
            {worksItems.map((item) => (
              <li key={item.id} style={{ position: "relative", cursor: "pointer" }} onClick={() => handleOpen(item)}>
                <img 
                  src={item.image1x} 
                  className="works-img" 
                  alt={item.title} 
                  loading="lazy" 
                  srcSet={`${item.image1x} 1x, ${item.image2x} 2x`} 
                />
                <div className="works-item">
                  <p className="works-item-title">{item.title}</p>
                  <p className="works-item-description">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="works-more">
            <p className="works-more-text">GO TO ALL WORK</p>
            <svg width="39" height="36" viewBox="0 0 39 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 15L0 20L33 20V15L0 15Z" fill="white"/>
              <path d="M19.001 34L35.001 18L19.001 2" stroke="white" strokeWidth="5"/>
            </svg>
          </div>
        </div>
      </section>

      {selectedItem && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal-content">
            <button className="modal-close" onClick={handleClose}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="modal-close-icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src={selectedItem.image1x} 
              className="modal-image" 
              srcSet={`${selectedItem.image1x} 1x, ${selectedItem.image2x} 2x`} 
              alt={selectedItem.title} 
            />
            <div className="modal-text">
              <p className="works-item-title">{selectedItem.title}</p>
              <p className="works-item-description">{selectedItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Works;
