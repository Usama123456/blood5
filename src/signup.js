import React, { Component } from 'react';
import * as firebase from 'firebase';
import './App.css';
import {hashHistory} from 'react-router';

class Signup extends Component {0
   constructor(props){
       super(props)
   this.sigup=this.sigup.bind(this);
} 


sigup(s){
    s.preventDefault();
    let useremail=this.refs.email.value;
     let userpass=this.refs.pass.value;
     console.log(useremail);
    console.log(userpass); 
    const promise=firebase.auth().createUserWithEmailAndPassword(useremail,userpass);
    promise.then(user=>{
        alert("Sign Up successful!");
        hashHistory.push('./signin')
    })   
}

    render(){
        return(
            <div>
            <div style={{background: 'lightsalmon',width: '42em',height: '2em',position: 'relative',left: '2em',borderRadius: '0.2em'}}></div>
             <h2 style={{ position: 'relative',left: '2em',top: '-2.1em'}}>Blood Donor App</h2>
            <center>
            
            <h2>Sign Up!</h2>
             
           
            <input placeholder='Email' type='email' ref='email'></input>  <br/><br/> 

            <input placeholder='Password' type='password' ref='pass'></input> <br/><br/>
            <button onClick={this.sigup}>Sign Up!</button>
            </center>
            </div>
        )
    }
}

export default Signup;