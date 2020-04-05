import React, {Component} from 'react';
import './App.css';
import CoronaStats from './Components/CoronaStats';
import World from './Components/World';
import Slogan from './Components/Slogan'; 
import Symtoms from './Components/Symtoms';
import AllCountries from './Components/AllCountries'
import Footer from './Components/Footer';

import img from './images/corona-Emoji.png';

class App extends Component{
  render(){
    return(
    <div className="App-Wrapper">
     <div className="App">
     <div className="App-header-img">
         <img src={img} alt="coronaImg" />
       </div>

       <div className="App-heading">
         <h1>I Stay At Home</h1>
         <h2>you stay at home too.</h2>
       </div>
       
     </div>

     <section id= "App-pakistan">
     <CoronaStats country ="Pakistan"/>
     </section>

     <section id ="App-world">
     <World />
     </section>
     <section id="App-slogan">
        <Slogan text="#StayHomeSaveLives" />
     </section>
     <section id="App-symtoms">
       <Symtoms />
     </section>
     <section id="App-allCountries">
      <AllCountries/>
     </section>
     <section id="App-Footer">
       <Footer />
     </section>
     
     </div>
      
    )
  }
}

export default App;
