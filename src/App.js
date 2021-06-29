
import React from 'react'
import { Footer, Navbar } from './components'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import GlobalStyle from './GlobalStyle';
import Home from './pages/HomePage/Home';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About/About';
import Service from './pages/Service/Service';
import Contact from './pages/Contact/Contact';
import success from './pages/Contact/success';
import Seo from './pages/Seo/Seo';
import Mobile from './pages/Mobile/Mobile';
import Website from './pages/Website/Website'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar/>
     <Switch>
       <Route path='/' exact component={Home} />
       <Route path='/About' exact component={About} />
       <Route path='/Service' exact component={Service} />
       <Route path='/Contact' exact component={Contact} />
       <Route path='/success' exact component={success}/>
       <Route path='/Seo' exact component={Seo}/>
       <Route path="/Mobile" exact component={Mobile}/>
       <Route path='/Website' exact component={Website}/>
       
     </Switch>
      <Footer/>
  
      
    </Router>
  );
}

export default App;
