import './projects.scss'

export default function projects() {
  return (
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
      </div>
    </div>
  )
}
