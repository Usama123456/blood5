import React, { Component } from 'react';
import *as firebase from 'firebase';
import './App.css';
import {hashHistory,Link} from 'react-router';
import hanks from './thanks';
import Signout from './signout';
import Header from './header';
<script src="https://www.gstatic.com/firebasejs/3.6.10/firebase-database.js"></script>

export default class Donorform extends Component{
constructor(props){
    super(props)
    this.state= {
        value:1,
        doselect: '',
       

    };
this.bloodgrp=this.bloodgrp.bind(this);
this.donor=this.donor.bind(this);
}







donor(ev){
    
    var currentDonor = {
    don: this.refs.nm.value,
     doage:this.refs.age.value,
     doemail:this.refs.email.value,
     doadd:this.refs.add.value,
     docont:this.refs.cont.value,
    //  doselect:this.refs.select.value
    
    }

var firebaseuid = firebase.auth().currentUser;
// console.log(firebaseuid,currentDonor); 
firebase.database().ref('Usama' + '/').push({currentDonor});
}

bloodgrp(ev,key){
    ev.preventDefault();
    this.setState({value:key+1,
    doselect:ev.target.childNodes[0].childValue})
    console.log(this.state.blood)

//  writeUserData(userId,don,doage,doemail,doadd,docont,doselect)
// firebase.database().ref('donors/'+ userId).set({
//     currentDoner
// });






} 



render(){

var stylep={
    fontSize: '0.7em',
    position: 'relative',
    top: '-1.5em',
    left: '-5em'
}
let stylesel={
        position: 'relative',
    top: '-3.3em',
    left: '2.5em'
}

const styleb={
    position: 'relative',
    left: '-2em'
}
    return(<div>
   <Header/>
    <center>
        <h3>Donor Registration Form</h3>
        <input ref='nm' placeholder='Name' type='name' ></input> <br/><br/>
        <input ref='age' placeholder='Age' type='number' ></input> <br/><br/>
        <input ref='email' placeholder='Email' type='email'></input> <br/><br/>
        <input ref='add' placeholder='Address' type='address'></input> <br/><br/>
        <input ref='cont' placeholder='Contact' type='number'></input> <br/><br/>
        {/*<p style={stylep}>Blood group</p>
        <select style={stylesel} ref='select'>
        <option>A+</option>
        <option>A-</option>
        <option>B+</option>
        <option>B-</option>
        <option>AB+</option>
        <option>AB-</option>
        <option>O+</option>
        <option>O-</option>
        
        </select>*/}

        <button onClick={this.bloodgrp}>Database</button>
        <Link to='./receiver'> <button onClick={this.donor} style={styleb}>Submit</button></Link>
     </center> 
      

      
    
        </div>          
        
    )
}
}

