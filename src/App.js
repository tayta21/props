import React from 'react';
import './App.css';
import firstpic from './profile/img/rick.png'
import secondpic from './profile/img/morty.png'

// pages
import Name from './profile/profile component/fullname'
import Bio from './profile/profile component/bio'
import Prof from './profile/profile component/profession'



function App() {
  const alertmyinput = name => alert(name)
  return (
    <div className="container">
    <div >
      <Name name="rick"><img src={firstpic} alt="rickpic"/></Name>
      <Bio bio="Rick Sanchez"/>
      <Prof name="rick" profession="n alcoholic scientist" alertmyinput={alertmyinput}/>
    </div>

    <div >
    <Name name="morty"><img src={secondpic} alt="mortypic"/></Name>
    <Bio bio="Morty Smith"/>
    <Prof name="morty" profession=" good boy" alertmyinput={alertmyinput}/>
  </div>
  </div>
  );
}

export default App;
