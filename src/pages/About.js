import { useState, useEffect } from "react";

const about = require('../about.json');
console.log(about.name)
function About(props) {
console.log(props)
console.log(props.info.name)

  // define a function that will return the JSX needed once we get the data
  const loaded = () => (
    <div className= "container about">
      <h2>Why SE?</h2>
      <p>{props.info.bio}</p>
      <h2>Education</h2>
      <p>Baruch BBA & GA Education</p>
      <h2>Technologies</h2>
      <p>Javascript, Python, React, etc.</p>
      <h2>Resume</h2>

      
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