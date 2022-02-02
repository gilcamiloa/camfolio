import {TagCloud} from 'react-tagcloud';
// import randomColor from 'randomcolor';
import JS from './images/assets/js-logo.png'


export default function MyCloud() {

  const data = [
    { value: <img src={JS} alt="JS" />, count: 38 },
    { value: 'React', count: 30 },
    { value: 'Nodejs', count: 28 },
    { value: 'Express.js', count: 25 },
    { value: 'HTML5', count: 33 },
    { value: 'MongoDB', count: 18 },
    { value: 'CSS3', count: 20 },
  ]

  return (
    <TagCloud
      minSize={12}
      maxSize={35}
      tags={data}
      onClick={tag => alert(`'${tag.value}' was selected!`)}
    />

    // <TagCloud
    //   style={{
    //     fontFamily: 'sans-serif',
    //     fontSize: 30,
    //     fontWeight: 'bold',
    //     fontStyle: 'italic',
    //     color: () => randomColor(),
    //     padding: 5,
    //     width: '100%',
    //     height: '100%',
    //     rotate: 45
    //   }}>
    //   <div style={{ fontSize: 50 }}><img src={JS} alt="" /></div>
    //   <div style={{ fontSize: 50 }}>react</div>
    //   <div style={{ fontSize: 50 }}>react</div>
    //   <div style={{ fontSize: 50 }}>react</div>
    //   <div style={{ fontSize: 50 }}>react</div>
    //   <div style={{ fontSize: 50 }}>react</div>
    //   <div style={{ fontSize: 50 }}>react</div>
    //   <div style={{ fontSize: 50 }}>react</div>
    //   <div style={{ fontSize: 50 }}>react</div>
    //   <div style={{ color: 'green' }}>tag</div>
    //   <div rotate={90}>cloud</div>
    // </TagCloud>
  );
}
