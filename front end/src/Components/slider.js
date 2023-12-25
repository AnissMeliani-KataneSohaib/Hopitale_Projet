// import React from "react";
// import 'react-slideshow-image/dist/styles.css'
// import {Fade,Zoom,Slide} from "react-slideshow-image"
// const slideimages=[
//     {
//      url:'./images/image1.jpg'
//     },
//     {
//         url:'./images/image2.jpg'
//     },
//     {
//         url:'./images/image3.jpg'
//     },
//     {
//         url:'./images/image4.jpg'
//     }
// ]
// const divStyle={
//     display:'flex',
//     justifyContent:'center',
//     alignItems:'center',
//     height:'400px',
//     backgroundSize:'cover'
// }
// export const Slider=()=>{
//     return(
//         <div className="slide-container">
//           <Fade>
//             {slideimages.map((image,index)=>{
//                 <div key={index}>
//                    <div style={{...divStyle,backgroundImage:`url ${image.url}`}}>
                      
//                    </div>
//                 </div>
//             })}
//           </Fade>
//         </div>
//     )
// }