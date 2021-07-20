import { useState, useEffect } from "react";

const about = require('../about.json');
console.log(about.name)
function About(props) {
console.log(props)
console.log(props.info.name)

  // define a function that will return the JSX needed once we get the data
  const loaded = () => (
    <div>
 
      <h2>{props.info.name}</h2>
      <a href= {props.info.linkedin} ><h3>Linkedin</h3></a>
      <p>{props.info.bio}</p>

      
    </div>
  );

  // if data arrives return the result of loaded, if not, an h1 that says loading
  return (
      
    <div>
        {about ? loaded() : <h1>Loading...</h1>}
    </div>
  )
}

export default About;