// import TagCloud from 'TagCloud'
// import $ from 'react'


// $(document).ready(() => {
//   const skillList = [
//     "XML", "jQuery", "NPM",
//     "Linux", "EJS", "MongoDB", "REST",
//     "SQL", "Android", "Express"
//   ];

//   const photoList = [
//     "python-logo", "java-logo", "javascript-logo",
//     "postgresql-logo", "react-logo", "git-logo", "html-logo",
//     "css3-logo", "nodejs"
//   ];

//   const photos = [];
//   photoList.forEach(() => {
//     skillList.push("");
//     photos.push(document.createElement("img"));
//   });

//   const n = skillList.length;
//   for (var i = 0; i < n * 3; i++) {
//     var a = Math.floor(Math.random() * n);
//     var b = Math.floor(Math.random() * n);

//     while (a === b || (skillList[a].length > 0 && skillList[b].length > 0) || (skillList[a].length == 0 && skillList[b].length == 0)) {
//       b = Math.floor(Math.random() * n);
//     }

//     var temp = skillList[a];
//     skillList[a] = skillList[b];
//     skillList[b] = temp;
//   }

//   const currWidth = window.visualViewport.width;
//   let divisor = 4;

//   if (currWidth <= 768) {
//     divisor = 2;
//   } else if (currWidth <= 1024) {
//     divisor = 3;
//   } else if (currWidth <= 1440) {
//     divisor = 3.5
//   }

//   const settings = {
//     // TagCloud: https://github.com/mcc108/TagCloud
//     radius: window.visualViewport.width / divisor,
//     maxSpeed: 'fast',
//     initSpeed: 'fast',
//     direction: 135,
//     keep: true
//   }

//   // Create the tag cloud using the skillList
//   // Set the tag cloud width to 90%
//   const tagCloud = TagCloud(".sphere", skillList, settings);
//   $(".tagcloud").css("width", "90%");

//   var j = 0;
//   var cloud = document.querySelectorAll(".tagcloud--item");
//   for (var i = 0; i < cloud.length; i++) {
//     if (j < photos.length && cloud[i].innerHTML.length === 0) {
//       photos[j].src = "images/assets/" + photoList[j] + ".png";
//       cloud[i].appendChild(photos[j]);
//       j++;
//     }
//   }
// });










// import {React, useState} from 'react';
// import TagCloud from 'TagCloud';
// import randomColor from 'randomcolor';
// import JavaScript from '../src/images/assets/js-logo.svg'



// export default function imgCloud () {

//   const
//   const cloud = TagCloud(".sphere", skillList, settings);

//   render() {
//     return (
//       <div className='tagcloud' style={width: 90%}>

//       </div>

//     var j = 0;
//     var cloud = document.querySelectorAll(".tagcloud--item");
//     for (var i = 0; i < cloud.length; i++) {
//       if (j < photos.length && cloud[i].innerHTML.length === 0) {
//         photos[j].src = "./images/tech-icons/" + photoList[j] + ".svg";
//         cloud[i].appendChild(photos[j]);
//         j++;
//       }
//     }





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
//     );
//   }
// }
