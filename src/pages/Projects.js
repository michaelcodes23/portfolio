import { useState, useEffect} from 'react';
import styled from 'styled-components';
function Projects (props) {
    console.log(props)
    // create state to hold projects
    const Head1 = styled.h1`
    font-size: 30px;
    margin-bottom: 10px;
    `;

    const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0.5em 1em;
    padding: 0.25em 1em;
    cursor:pointer;
    `;

    const BlueButton = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid blue;
    color: blue;
    margin: 0.5em 1em;
    padding: 0.25em 1em;
    cursor:pointer;
    `


    //define a function that will return the JSX needed once we get the data

        return (
        <>
            {/* <h1>props[0].name</h1> */}
            {props.info.map((project, index)=> (
            <div>
                <Head1>{project.name}</Head1>
                <img className ="projectImg" src={project.image}/>
                <a href = {project.git}>
                    <BlueButton>Github</BlueButton>
                </a>
                <a href = {project.live}>
                    <Button>Live Site</Button>
                </a>
            </div>
                
            ))
            }
        </>
        )
}

export default Projects