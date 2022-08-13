import "./product.scss";
import React, { useState } from 'react';

const Product = ({ name, img, link, desc }) => {

  const [isShown, setIsShown] = useState(false);
  // useEffect(() => {
  // });

  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <div className="p-desc" onClick={() => window.open(link)}
                              style={{  backgroundImage: `url(${img})`,
                                        backgroundSize: 'cover'}}
                              onMouseOver={() => setIsShown(true)}
                              onMouseLeave={() => setIsShown(false)}>
          {isShown && (
          <div className='p-hover'>
            <h1>{name}</h1>
            <p>{desc}</p>
            <break/>
            <h1>View More +</h1>
          </div>
          )}
      </div>
    </div>
  );
};

export default Product;
