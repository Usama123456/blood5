import React, { Component } from 'react';
import * as firebase from 'firebase';
import './App.css';
import {hashHistory,Link} from 'react-router';

import wlcome from './welcome';
import Signup from './signup';
import Header from './header';

class Signin extends Component {
    constructor(props){
        super(props)



this.sigin=this.sigin.bind(this);
this.state= {
    useremail: "",
    userpass : ""
    

}
    }





sigin(ev){
    ev.preventDefault();
        // const emailNode=findDOMNode(this.refs.email)
        const useremail = this.refs.email.value;

        const userpass=this.refs.pass.value;
        const error=this.refs.error;
    console.log(useremail);
    console.log(userpass);
    // console.log(mess)
    const promise=firebase.auth().signInWithEmailAndPassword(useremail,userpass);
    promise.then(user=>{
        alert("Sign In Successful!!!!!")
        hashHistory.push('./welcome')
    promise.catch(e =>error.innerHTML=e.message )
    }

    )
}
    render(){

        return(

            <div>
            <div style={{background: 'lightsalmon',width: '42em',height: '2em',position: 'relative',left: '2em',borderRadius: '0.2em'}}></div>
             <h2 style={{ position: 'relative',left: '2em',top: '-2.1em'}}>Blood Donor App</h2>

            <center>
             
            <h2>Sign In</h2>
            
            
            
            <input placeholder='Email' ref='email' type='email'></input>  <br/> <br/>
            <input placeholder='Password'ref='pass' type='password'></input> <br/><br/>
         
            <Link to='./signup'><span style={{fontSize: '0.6em'}}>Not have account yet? Join our community</span></Link>

           


            </center>
            </div>
        )
    }
}

export default Signin;