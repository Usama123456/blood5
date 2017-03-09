import React, { Component } from 'react';
import * as firebase from 'firebase';
import './App.css';
import {hashHistory,Link} from 'react-router';
import Signup from './signup';
import Header from './header';
import Donorform from './donorform'
export default class eceiver extends Component{
    constructor(props){
        super(props);
        this.state={
            donors: []
        }
    }
    
    componentWillMount(){
        var donors = [];
        firebase.database().ref('/Usama/').on('value', (data)=>{
            var obj = data.val();
            for (var props in obj)
            donors.push(obj[props].currentDonor)
            console.log(donors);
            this.setState({
                donors: donors
            })
        })
    }
    
    
    
    
    
    
    
    
    
    
    render(){
        var stylep={
    fontSize: '0.7em',
    position: 'relative',
  
    top: '-4.5em',
    left: '-6em'
}
let stylesel={
        position: 'relative',
    top: '-5.7em',
    left: '2.5em'
}
        return(<div>
        {this.state.donors.map((m,i)=>
        <table key={i}>
            <tr key={i}><td>{m.doadd}</td></tr>
            <tr><td>{m.doemail}</td></tr>
            <tr><td>{m.doage}</td></tr>
            <tr><td>{m.docont}</td></tr>
            <tr><td>{m.don}</td></tr>
        </table>
)}
      <Header/>
           <center>


         {/*<p style={stylep}>Select blood group</p>
        <select style={stylesel}>
        <option>A+</option>
        <option>A-</option>
        <option>B+</option>
        <option>B-</option>
        <option>AB+</option>
        <option>AB-</option>
        <option>O+</option>
        <option>O-</option>
        
        </select>*/}
        <button style={{position: 'relative', top: '-4em',left: '-1.3em'}}>Check</button>
        </center>
        </div>

        )
    }
}