import logo from './logo.svg';
import {Navigation} from "./NavigationBar/Navigation"
import './App.css';
import 'utils/styles.css'
import {HomePage, AboutPage, ContactPage, WorkPage} from 'pages/Pages';
import Particles from 'react-particles-js';
import{
  HashRouter as HRouter,
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

function App() {
  return (


    <div className="App background">

      
    
      

      
        <Navigation/>
        <div className="page-holder">
          <HomePage/>
          <AboutPage/>
          <WorkPage/>
          <ContactPage/>
        </div>

       {/* <Switch>
          <Route exact path = {["/home","/"]}  component = {HomePage} />
          <Route path = "/about" component = {AboutPage} />
          <Route path = "/work" component = {WorkPage} />
          <Route path = "/contact" component = {ContactPage} />
        </Switch>
         */}

      

    </div>
  );
}

export default App;
