import './App.css';

// Import Components
import Header from './components/Header'
import Footer from './components/Footer'
import {Route, Switch} from 'react-router-dom';

//Import Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';


function App() {
  // URL should have Your HEROKU URL for your backend , make sure you include the trailing slash
  const URL = "https://express-react-mike.herokuapp.com/"
  const about = require('./about.json');
  const projects = require('./projects.json');
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path = "/">
          <Home />
        </Route>
        <Route path = "/projects">
          <Projects info= {projects}/>
        </Route>
        <Route path = "/about">
          <About info={about}/>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
