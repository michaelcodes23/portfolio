import './App.css';

// Import Components
import Header from './components/Header'
import Footer from './components/Footer'
import {Route, Switch, useLocation} from 'react-router-dom';
import Sidebar from './components/Sidebar';

//Import Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ContactInfo from './pages/Contact_Info';

function App() {
  // URL should have Your HEROKU URL for your backend , make sure you include the trailing slash
  const URL = "https://express-react-mike.herokuapp.com/"
  const about = require('./about.json');
  const projects = require('./projects.json');
  const location = useLocation();
  return (
    <div className="App">
      <Header />
      <Sidebar/>
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
        <Route path = "/contactinfo">
          <ContactInfo />
        </Route>
      </Switch>
      {location.pathname !== '/contactinfo' && <Footer/>}
    </div>
  );
}

export default App;
