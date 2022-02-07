import "./projects.scss";
import Product from "./Product";
import { products } from "./productData";

const ProductList = () => {
  return (
    <div className='projects'>
      <div className='projectsContainer'>
        <div className="pl">
          <div className="pl-texts">
            <h1 className="pl-title title">Projects</h1>
            <p className="pl-desc">
            Here are some of the projects I have been able to create and collaborate on so far..
            </p>
          </div>
          <div className="pl-list">
            {products.map((item) => (
            <Product key={item.id} img={item.img} link={item.link} desc={item.desc} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
