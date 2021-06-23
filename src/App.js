
import React from 'react'
import { Footer, Navbar } from './components'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import GlobalStyle from './GlobalStyle';
import Home from './pages/HomePage/Home';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About/About';
function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar/>
     <Switch>
       <Route path='/' exact component={Home} />
       <Route path='/About' exact component={About} />

     </Switch>
      <Footer/>
  
      
    </Router>
  );
}

export default App;
