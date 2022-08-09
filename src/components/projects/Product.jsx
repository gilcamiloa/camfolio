import "./product.scss";
import React, { useState } from 'react';

const Product = ({ name, img, link, desc }) => {

  const [isShown, setIsShown] = useState(false);

  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <div className="p-desc" onClick={() => window.open(link)}
                              style={{  backgroundImage: `url(${img})`,
                                        objectFit: 'cover'}}
                              onMouseOver={() => setIsShown(true)}
                              onMouseLeave={() => setIsShown(false)}
                              >
          {isShown && (
          <div className='p-hover'>
              <h1>{name}</h1>
              <p>{desc}</p>
            </div>
          )}
      </div>
    </div>
  );
};

export default Product;
