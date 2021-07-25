import { useState, useEffect } from "react";

const about = require('../about.json');
console.log(about.name)
function About(props) {
console.log(props)
console.log(props.info.name)

  // define a function that will return the JSX needed once we get the data
  const loaded = () => (
    <div className= "container about">
      <div class = "SE"> 
        <h2 class = "about-heading">Why SE?</h2>
        <p class = "about-body">After graduating college I found myself working 
        in a global firm helping to build successful online products people can benefit from. 
        I developed a love for working on digital services and tools anyone around the world could benefit from.
        I look forward to helping you build successful products and continue to help people in their every day lives</p>
      </div>
      <div class = "bio"> 
        <h2 class = "about-heading">Who I am -</h2>
        <p class = "about-body">I am a professional with experience in the banking industry occupying roles ranging from risk management, 
        digital business management, and recently strategy in the digital payments environment.</p>
        <p class = "about-body">I developed a passion for programming when I first started using SQL as part of a month rotation at J.P. Morgan and Chase,
         this led me discover the world of computer programming, leading to my pursuit of successfully completing a course in software engineering at General Assembly in 2021</p>
        <p class = "about-body">I love seeing the benefits people draw from online products and services, and I look forward to continue to build great online experiences for users!</p>
      </div>
      <div class = "education"> 
        <h2 class = "about-heading">Education -</h2>
        <p class = "about-body">CUNY Baruch - New York, United States</p>
        <p class = "about-body">BBA in International Business</p>
        <p class = "about-body">Minors: Law, Finance</p>
        <p class = 'about-body'>Graduated: December 2016</p>
        <p class = "about-body">General Assembly - New York, United States</p>
        <p class = "about-body">Program: Software Engineering Immersive</p>
        <p class = 'about-body'>Graduated: August 2021</p>
      </div>
      <h2>Technologies</h2>
      <p>Javascript, Python, React, etc.</p>
      <h4 className = "resume">Checkout my resume to learn more about my professional experience, education, and skills <a className="resume-file" href = "https://drive.google.com/file/d/1pU20dLKYTf_HBmSV_DIpzBz0Xfi1miKt/view"><i class="fas fa-file-invoice fa-2x"></i></a></h4>
   
      
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