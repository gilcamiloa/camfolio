import "./product.scss";

const Product = ({ img, link, desc }) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
        <span>{desc}</span>
      </a>
    </div>
  );
};

export default Product;
