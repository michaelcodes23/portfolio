import prof_suit from './prof_suit.jpg'
function Home (props){
    return (
    <div className= "container home">
        <h1>Hi, Welcome To My Porfolio Page</h1>

        <div class= 'home-body'>
            {/* <h1 class = 'home-image'>Insert Image here</h1> */}
            <img src = {prof_suit} class = 'home-image'/>
            <h2 class = 'home-intro'>Welcome to my portfolio. Within this website you'll find a summary of my work in software engineering via projects as well as look into my educatinal and professional experience.</h2>
        </div>
        <br/>
        <p class = 'home-footer'>Use the nav bar to find out more about me, the projects I worked on, and how to contact me <i class="fas fa-laugh-beam"></i></p>
    </div>
    )
}

export default Home