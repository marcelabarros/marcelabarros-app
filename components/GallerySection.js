import React from "react";

export default function GallerySection() {
  const pictures = [
    {
      id: 1,
      src:
        "https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg",
    },
    {
      id: 1,
      src:
        "https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg",
    },
    {
      id: 1,
      src:
        "https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg",
    },
    {
      id: 1,
      src:
        "https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg",
    },
    {
      id: 1,
      src:
        "https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg",
    },
    {
      id: 1,
      src:
        "https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg",
    },
    {
      id: 1,
      src:
        "https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg",
    },
  ];
  return (
    <div className="gallery-container">
      <h2>Competiciones</h2>
      <div>
        {pictures.map((pic) => {
          return <img src={pic.src} key={pic.id} alt={pic.id} />;
        })}
      </div>
    </div>
  );
}
