import './projects.scss'

export default function projects() {
  return (
<<<<<<< Updated upstream
    <div className="projects" id="projects">
      <div className="container">
        <h1>Projects</h1>
        <div className="d-flex text-center">
          <div className="col-12 col-lg-4 text-center">
            <h1>Hello</h1>
            <h2>Is there anybody in there?</h2>
            <h2>Just nod if you can he me</h2>
          </div>
          <div className="col-12 col-lg-4 text-center card-category">
            <h1>Hello</h1>
            <h2>Is there any DATA in there?</h2>
            <h2>Just nod if you can he me</h2>
          </div>
          <div className="col-12 col-lg-4 text-center">
            <h1>Hello</h1>
            <h2>Is there any DATA in there?</h2>
            <h2>Just nod if you can he me</h2>
          </div>
          return (
          {/* <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
              {list.map((item) => (
                <PortfolioList
                  title={item.title}
                  active={selected === item.id}
                  setSelected={setSelected}
                  id={item.id}
                />
              ))}
            </ul>
            <div className="container">
              {data.map((d) => (
                <div className="item">
                  <img
                    src={d.img}
                    alt=""
                  />
                  <h3>{d.title}</h3>
                </div>
              ))}
            </div>
          </div> */}
        </div>
=======
    <div className="projects">
      <div className="projectsContainer">
        <div className="title">
          <h1>PROJECTS</h1>
        </div>
        <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
          {data.map((d) => (
            <div className="container">
              <div className="item">
                <div className="left">
                  <div className="leftContainer">
                    <div className="imgContainer">
                      <img src={d.icon} alt="" />
                    </div>
                    <h2>{d.title}</h2>
                    <p>{d.desc}</p>
                    <span>Source Code</span>
                  </div>
                </div>
                <div className="right">
                  <img
                    src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <img
          src="../../images/assets/arrow.png"
          className="arrow left"
          alt=""
          onClick={() => handleClick("left")}
        />
        <img
          src="../../images/assets/arrow.png"
          className="arrow right"
          alt=""
          onClick={() => handleClick()}
        />
>>>>>>> Stashed changes
      </div>
    </div>
  )
}
