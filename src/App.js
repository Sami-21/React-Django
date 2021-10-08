import React from 'react';
import {BrowserRouter as Router ,Switch ,Route} from 'react-router-dom'
import Header from './Components/Header';
import Category from './Components/Category';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Checkout from './Components/Checkout';
import About from './Components/About';
import Contact from './Components/Contact';
import StoreContact from './Components/StoreContact';


function App() {

  return (
    <Router>
    <div className="flex flex-col overflow-x-hidden items-center justify-between w-screen min-h-screen bg-gray-100 px-8 pt-8">
      <Switch>
         <Route path="/category/sport-shoes">
        <Header/>
        <Category name="sport-shoes"/>
        <Footer/>
      </Route> 
      <Route path="/category/back-packs">
        <Header/>
        <Category name="back packs"/>
        <Footer/>
      </Route> 
      <Route path="/category/games">
        <Header/>
        <Category name="games"/>
        <Footer/>
      </Route> 
      <Route path="/category/watches">
        <Header/>
        <Category name="watches"/>
        <Footer/>
      </Route> 
      <Route path='/checkout'>
        <Checkout/>
        <Footer/>
      </Route>
      <Route path='/about'>
        <Header/>
        <About/>
        <Footer/>
      </Route>     
      <Route path='/contact'>
        <Header/>
        <StoreContact/>
        <Footer/>
      </Route>     
      <Route path='/'>
        <Header/>
        <Home/>
        <Footer/>
      </Route>      
      </Switch>
    </div>
    </Router>
  );
}

export default App;










 