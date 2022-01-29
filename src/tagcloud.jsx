// import React from 'react'

// import TagCloud from 'TagCloud';

// class MyCloud extends React.Component {
//   constructor(props){
//     super.props;

//     this.TagCloud = require('TagCloud');
//     this.container = '.tagcloud';

//     this.texts = [
//       '3D', 'TagCloud', 'JavaScript',
//       'CSS3', 'Animation', 'Interactive',
//       'Mouse', 'Rolling', 'Sphere',
//       '6KB', 'v2.x',
//     ];
//     this.options = {};
//   }

//   render() {
//     return (
//       <div>
//         <button type="button" onClick={this.TagCloud}>
//           Play!
//         </button>
//       </div>
//     );
//   }

// }

// export default MyCloud



// // // ZC code for TagCloud

// const tagCloud = TagCloud(".sphere", skillList, settings);
// $(".tagcloud").css("width", "90%");




// class MyCloud extends React.Component {
//   constructor(props){
//     super.props;


//     this.TagCloud = require('TagCloud');
//     this.container = '.tagcloud';

//     this.texts = [
//       '3D', 'TagCloud', 'JavaScript',
//       'CSS3', 'Animation', 'Interactive',
//       'Mouse', 'Rolling', 'Sphere',
//       '6KB', 'v2.x',
//     ];
//     this.options = {};
//   }

//   useEffect () {
//     var j = 0;
//     var cloud = document.querySelectorAll(".tagcloud--item");
//     for (var i = 0; i < cloud.length; i++) {
//       if (j < photos.length && cloud[i].innerHTML.length === 0) {
//         photos[j].src = "./images/assets/" + photoList[j] + ".png";
//         cloud[i].appendChild(photos[j]);
//         j++;
//       }
//     }
//   }

//   render() {
//     return (
//       <TagCloud></TagCloud>
//     );
//   }

// }

// export default MyCloud
