// import React from 'react'
// import html from '../assets/html5.svg'
// import css from  '../assets/css3.svg'
// import js from  '../assets/javascript.svg'
// import mongo from  '../assets/mongodb.svg'
// import exp from  '../assets/express.svg'
// import react from  '../assets/react.svg'
// import node from  '../assets/node-js.svg'
// import figma from '../assets/figma.svg'
// import illustrator from '../assets/adobe-illustrator.svg'
// import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';

// function Skills() {
//   const lang = [{image:html,name:'HTML'},{image:css,name:'CSS'},{image:js,name:'JavaScript'}]
//   const tools = [{image:mongo,name:'MongoDB'},{image:exp,name:'ExpressJS'},{image:react,name:'React JS'},{image:node,name:'Node JS'}]
//   const design = [{image:figma,name:'Figma'},{image:illustrator,name:'Illustrator'}]
//   const percentage = 66;
//   return (
//     <div className='Skills w-full h-1/2 '>
//       <div className='w-full h-full flex flex-col bg-gray-100'>
//         <h1 className='text-5xl font-bold text-center p-2'>My Skills</h1>
//         <div className='w-full flex flex-col p-2 my-2'>
//           <h1 className='text-center text-3xl font-semibold'>Languages</h1>
//           <div className='w-full flex justify-center items-center text-center gap-5 p-5 flex-wrap'>
//             {lang.map(element => (
//               <div className='flex flex-col bg-orange-50 p-2 rounded-xl shadow-md shadow-gray-400 justify-center items-center w-20' >
//               <img src={element.image} alt="html" className='w-1/2' />
//               <h1>{element.name}</h1>
//             </div>))}
//             {/* <div className='flex flex-col bg-orange-50 p-2 rounded-xl shadow-md shadow-gray-400 justify-center items-center w-20' >
//               <img src={html} alt="html" className='w-1/2' />
//               <h1>HTML</h1>
//             </div>
//             <div className='flex flex-col bg-orange-50 p-2 rounded-xl shadow-md shadow-gray-400 justify-center items-center w-20' >
//               <img src={html} alt="html" className='w-1/2' />
//               <h1>HTML</h1>
//             </div>
//             <div className='flex flex-col bg-orange-50 p-2 rounded-xl shadow-md shadow-gray-400 justify-center items-center w-20' >
//               <img src={html} alt="html" className='w-1/2' />
//               <h1>HTML</h1>
//             </div>
//             <div className='flex flex-col bg-orange-50 p-2 rounded-xl shadow-md shadow-gray-400 justify-center items-center w-20' >
//               <img src={html} alt="html" className='w-1/2' />
//               <h1>HTML</h1>
//             </div>
//             <div className='flex flex-col bg-orange-50 p-2 rounded-xl shadow-md shadow-gray-400 justify-center items-center w-20' >
//               <img src={html} alt="html" className='w-1/2' />
//               <h1>HTML</h1>
//             </div>
//             <div className='flex flex-col bg-orange-50 p-2 rounded-xl shadow-md shadow-gray-400 justify-center items-center w-20' >
//               <img src={html} alt="html" className='w-1/2' />
//               <h1>HTML</h1>
//             </div>
//             <div className='flex flex-col bg-orange-50 p-2 rounded-xl shadow-md shadow-gray-400 justify-center items-center w-20' >
//               <img src={html} alt="html" className='w-1/2' />
//               <h1>HTML</h1>
//             </div>
//             <div className='flex flex-col bg-orange-50 p-2 rounded-xl shadow-md shadow-gray-400 justify-center items-center w-20' >
//               <img src={html} alt="html" className='w-1/2' />
//               <h1>HTML</h1>
//             </div>
//             <div className='flex flex-col bg-orange-50 p-2 rounded-xl shadow-md shadow-gray-400 justify-center items-center w-20' >
//               <img src={html} alt="html" className='w-1/2' />
//               <h1>HTML</h1>
//             </div> */}
//           </div>
//         </div>
//         <div className='w-full flex flex-col p-2 my-2'>
//           <h1 className='text-center text-3xl font-semibold'>Tools</h1>
//           <div className='w-full flex justify-center items-center text-center gap-5 p-5'>
//           {tools.map(element => (
//             <div className='flex flex-col bg-orange-50 p-2 rounded-xl shadow-md shadow-gray-400 justify-center items-center w-20' >
//               <img src={element.image} alt="html" className='w-1/2' />
//               <h1>{element.name}</h1>
//             </div>))}
//             {/* <div className='flex flex-col bg-orange-50 p-2 rounded-xl shadow-md shadow-gray-400 justify-center items-center w-20' >
//               <img src={html} alt="html" className='w-1/2' />
//               <h1>HTML</h1>
//             </div>
//             <div className='flex flex-col bg-orange-50 p-2 rounded-xl shadow-md shadow-gray-400 justify-center items-center w-20' >
//               <img src={html} alt="html" className='w-1/2' />
//               <h1>HTML</h1>
//             </div>
//             <div className='flex flex-col bg-orange-50 p-2 rounded-xl shadow-md shadow-gray-400 justify-center items-center w-20' >
//               <img src={html} alt="html" className='w-1/2' />
//               <h1>HTML</h1>
//             </div>
//             <div className='flex flex-col bg-orange-50 p-2 rounded-xl shadow-md shadow-gray-400 justify-center items-center w-20' >
//               <img src={html} alt="html" className='w-1/2' />
//               <h1>HTML</h1>
//             </div>
//             <div className='flex flex-col bg-orange-50 p-2 rounded-xl shadow-md shadow-gray-400 justify-center items-center w-20' >
//               <img src={html} alt="html" className='w-1/2' />
//               <h1>HTML</h1>
//             </div>
//             <div className='flex flex-col bg-orange-50 p-2 rounded-xl shadow-md shadow-gray-400 justify-center items-center w-20' >
//               <img src={html} alt="html" className='w-1/2' />
//               <h1>HTML</h1>
//             </div>
//             <div className='flex flex-col bg-orange-50 p-2 rounded-xl shadow-md shadow-gray-400 justify-center items-center w-20' >
//               <img src={html} alt="html" className='w-1/2' />
//               <h1>HTML</h1>
//             </div>
//             <div className='flex flex-col bg-orange-50 p-2 rounded-xl shadow-md shadow-gray-400 justify-center items-center w-20' >
//               <img src={html} alt="html" className='w-1/2' />
//               <h1>HTML</h1>
//             </div>
//             <div className='flex flex-col bg-orange-50 p-2 rounded-xl shadow-md shadow-gray-400 justify-center items-center w-20' >
//               <img src={html} alt="html" className='w-1/2' />
//               <h1>HTML</h1>
//             </div> */}
//           </div>
//         </div>
//         <div className='w-full flex flex-col p-2 my-2'>
//           <h1 className='text-center text-3xl font-semibold'>Design</h1>
//           <div className='w-full flex justify-center items-center text-center gap-5 p-5'>
//             {design.map(element => (<div className='flex flex-col bg-orange-50 p-2 rounded-xl shadow-md shadow-gray-400 justify-center items-center w-20' >
//               <img src={element.image} alt="html" className='w-1/2' />
//               <h1>{element.name}</h1>
//             </div>))}
//             {/* <div className='flex flex-col bg-orange-50 p-2 rounded-xl shadow-md shadow-gray-400 justify-center items-center w-20' >
//               <img src={html} alt="html" className='w-1/2' />
//               <h1>HTML</h1>
//             </div>
//             <div className='flex flex-col bg-orange-50 p-2 rounded-xl shadow-md shadow-gray-400 justify-center items-center w-20' >
//               <img src={html} alt="html" className='w-1/2' />
//               <h1>HTML</h1>
//             </div>
//             <div className='flex flex-col bg-orange-50 p-2 rounded-xl shadow-md shadow-gray-400 justify-center items-center w-20' >
//               <img src={html} alt="html" className='w-1/2' />
//               <h1>HTML</h1>
//             </div>
//             <div className='flex flex-col bg-orange-50 p-2 rounded-xl shadow-md shadow-gray-400 justify-center items-center w-20' >
//               <img src={html} alt="html" className='w-1/2' />
//               <h1>HTML</h1>
//             </div>
//             <div className='flex flex-col bg-orange-50 p-2 rounded-xl shadow-md shadow-gray-400 justify-center items-center w-20' >
//               <img src={html} alt="html" className='w-1/2' />
//               <h1>HTML</h1>
//             </div>
//             <div className='flex flex-col bg-orange-50 p-2 rounded-xl shadow-md shadow-gray-400 justify-center items-center w-20' >
//               <img src={html} alt="html" className='w-1/2' />
//               <h1>HTML</h1>
//             </div>
//             <div className='flex flex-col bg-orange-50 p-2 rounded-xl shadow-md shadow-gray-400 justify-center items-center w-20' >
//               <img src={html} alt="html" className='w-1/2' />
//               <h1>HTML</h1>
//             </div>
//             <div className='flex flex-col bg-orange-50 p-2 rounded-xl shadow-md shadow-gray-400 justify-center items-center w-20' >
//               <img src={html} alt="html" className='w-1/2' />
//               <h1>HTML</h1>
//             </div>
//             <div className='flex flex-col bg-orange-50 p-2 rounded-xl shadow-md shadow-gray-400 justify-center items-center w-20' >
//               <img src={html} alt="html" className='w-1/2' />
//               <h1>HTML</h1>
//             </div> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Skills




