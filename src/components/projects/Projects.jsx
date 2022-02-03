// import './projects.scss'
// import { useState } from "react";

// export default function Projects() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const data = [
//     {
//       id: "1",
//       icon: "./../images/assets/mobile.png",
//       title: "theGreenRooom",
//       desc:
//         "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//       img:
//         "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
//     },
//     {
//       id: "2",
//       icon: "../images/assets/globe.png",
//       title: "React Portfolio",
//       desc:
//         "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//       img:
//         "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
//     },
//     {
//       id: "3",
//       icon: "../../images/assets/writing.png",
//       title: "Realm of Purity",
//       desc:
//         "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//       img:
//         "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
//     },
//   ];

//   const handleClick = (way) => {
//     way === "left"
//       ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
//       : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
//   };

//   return (
//     <div className="projects">
//       <div className="projectsContainer">
//         <div className="title">
//           <h1>PROJECTS</h1>
//         </div>
//         <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
//           {data.map((d) => (
//             <div className="sliderContainer">
//               <div className="item">
//                 <div className="left">
//                   <div className="leftContainer">
//                     <div className="imgContainer">
//                       <img src={d.icon} alt="" />
//                     </div>
//                     <h2>{d.title}</h2>
//                     <p>{d.desc}</p>
//                     <span>Source Code</span>
//                   </div>
//                 </div>
//                 <div className="right">
//                   <img
//                     src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
//                     alt=""
//                   />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <img src="../../images/assets/arrow.png" className="arrow left" alt="" onClick={() => handleClick("left")}/>
//       <img src="../../images/assets/arrow.png" className="arrow right" alt="" onClick={() => handleClick()}/>
//     </div>
//   );
// }


// import "./productList.css";
import "./projects.scss";
import Product from "./Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className='projects'>
    <div className='projectsContainer'>
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title title">Create & inspire. It's Lama</h1>
        <p className="pl-desc">
          Lama is a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside.
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
