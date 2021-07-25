import prof_suit from './prof_suit.jpg'
function Home (props){
    return (
    <div className= "container home">
        <h1>Hi, Welcome To My Porfolio Page</h1>

        <div class= 'home-body'>
            <img src = {prof_suit} class = 'home-image'/>
            <h2 class = 'home-intro'>Michael Cuenca Silva</h2>
            <p  class = 'role'>Software Engineer</p>
            <p class = "personal-brand">I am a Software Engineer who is passionate 
            about creating products, tools, and online services; leveraging client 
            feedback and data to drive a great client experience end-users 
            can benefit from in their day-to-day lives.</p>
        </div>
        <br/>
        <p class = 'home-footer'>Use the nav bar to find out more about me, the projects I worked on, and how to contact me <i class="fas fa-laugh-beam"></i></p>
    </div>
    )
}

export default Home