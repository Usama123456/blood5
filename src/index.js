import React from 'react';
import ReactDOM from 'react-dom';
import img from './img.jpg'
import './index.css';
import *as firebase from 'firebase';
import Signup from './signup';
import Signin from './signin';
import {Router , Route , Link  , hashHistory} from 'react-router';

<script src="https://www.gstatic.com/firebasejs/3.7.0/firebase.js"></script>

import Donorform from './donorform';
import wlcome from './welcome';
import eceiver from './receiver';
import hanks from './thanks';
<script src="https://www.gstatic.com/firebasejs/3.6.10/firebase-database.js"></script>

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC77MbLOj0b-cxb92yq-JNhihMw__Uh4P0",
    authDomain: "blood-donor-app-f485f.firebaseapp.com",
    databaseURL: "https://blood-donor-app-f485f.firebaseio.com",
    storageBucket: "blood-donor-app-f485f.appspot.com",
    messagingSenderId: "982540205499"
  };
  firebase.initializeApp(config);


class Start extends React.Component {
  render(){
    let styled={
      background: 'lightsalmon',
    width: '42em',
    height: '2em',
    position: 'relative',
    left: '2em',
    borderRadius: '0.2em'
    }

    let styleh={
          position: 'relative',
    left: '2em',
    top: '-2.1em'
    }
    let si={
          // textDecoration: 'italic',
    position: 'relative',
    top: '-5.8em',
    left: '40em'
    }
    return <div>
    <div style={{background: 'lightsalmon',width: '42em',height: '2em',position: 'relative',left: '2em',borderRadius: '0.2em'}}></div>
     <h2 style={{ position: 'relative',left: '2em',top: '-2.1em'}}>Blood Donor App</h2>
    <Link to='./signin'> <span style={{ position: 'relative',top: '-5.8em',left: '34em'}}>Sign In </span></Link>
    <span style={{  position: 'relative',
    left: '34.5em',
    top: '-5.8em'}}>or</span>
    <Link to='./signup'> <span style={{ position: 'relative',top: '-5.8em',left: '35em'}}>Sign Up </span></Link>
    <center>
    <img style={{width: '42em',height: '9em',top: '-4em',left: '0.2em',position: 'relative'}} src={img}/>
    <p style={{width: '42em',fontFamily: 'sans-serif',position: 'relative',top: '-4em',left: '0.5em'}}>Blood donation is one of the most significant contribution that a person can make towards the society. 
    It is not harmful for an adult person to donate blood. 
    The body of the donor can regenerate the blood within few days. It poses no threat to the metabolism of the body.</p>
    
    
    <br/>
   
   
   
    </center>
    </div>
  }
}



ReactDOM.render(
  <Router history={hashHistory}>
  <Route path='/' component={Start}></Route>
  <Route path='./signup' component={Signup}> </Route>
  <Route path='./signin' component={Signin}></Route>
  <Route path='./donorform' component={Donorform}></Route>
  <Route path='./welcome' component={wlcome}></Route>
  <Route path='./receiver' component={eceiver}></Route>
  <Route path='./thanks' component={hanks}></Route>
  </Router>,
  document.getElementById('root')
);
