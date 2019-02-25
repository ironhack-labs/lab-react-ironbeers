// import React, { Component } from 'react';
// import { myProjects } from './components/projects';
// import { Link } from 'react-router-dom';

// const projectDetails = (props) => {
//   console.log(props)

//   const getProject = (id) => {
//     const theProject = oneProject => {
//       return oneProject.id === id;
//     }
//     return myProjects.find(theProject)
//   };
  
//   const { params } = props.match;
//   const foundProject = getProject(params.id, 10);
   
//   return (
//     <div>
//       <h2>{ foundProject.name } <span style={{fontSize:"14px"}}>{ foundProject.year }</span></h2>
//       <h3>Used technologies: { foundProject.technologies }</h3>
//       <p>{ foundProject.description }</p>
//       <Link to='/projects'>Back</Link>
//     </div>
//   )
// }

// export default projectDetails;