import "./projects.scss";
import React from 'react';
import Product from "./Product";
import { products } from "./productData";

const Projects = () => {
  return (
    <div className='projects'>
      <div className="pl">
        <div className="pl-texts">
          <h1 className="pl-title">&lt;&lt;<span>&nbsp;Projects&nbsp;</span>&gt;&gt;</h1>
          <p className="pl-desc">
            Recent projects, widgets and collaborations
          </p>
        </div>
        <div className="pl-list">
          {products.map((item) => (
          <Product key={item.id} name={item.name} img={item.img} link={item.link} desc={item.desc} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
