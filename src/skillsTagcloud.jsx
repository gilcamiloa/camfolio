import {React, useState} from 'react';
import TagCloud from 'TagCloud';
import randomColor from 'randomcolor';
import JavaScript from '../src/images/assets/js-logo.svg'



export default function imgCloud () {

  const
  const cloud = TagCloud(".sphere", skillList, settings);

  render() {
    return (
      <div className='tagcloud' style={width: 90%}>

      </div>

    var j = 0;
    var cloud = document.querySelectorAll(".tagcloud--item");
    for (var i = 0; i < cloud.length; i++) {
      if (j < photos.length && cloud[i].innerHTML.length === 0) {
        photos[j].src = "./images/tech-icons/" + photoList[j] + ".svg";
        cloud[i].appendChild(photos[j]);
        j++;
      }
    }





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
      //   <div style={{ fontSize: 50 }}>{JavaScript}</div>
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
}
