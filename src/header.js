import React, { Component } from 'react';
// import * as firebase from 'firebase';
import './App.css';
import {hashHistory,Link} from 'react-router';
import home from './home.png'

export default class Header extends Component {
    render(){
        return(<div>
            <div style={{background: 'lightsalmon',width: '42em',height: '2em',position: 'relative',left: '2em',borderRadius: '0.2em'}}></div>
           <Link to='./signout' style={{textDecoration:'none'}}> <span style={{ position: 'relative',top: '-1.6em',left: '39.5em',color:'black'}}>Signout </span></Link>
             <h2 style={{ position: 'relative',left: '2em',top: '-2.9em'}}>Blood Donor App</h2>
             {/*<img src={home}/>*/}
        </div>
        )
    }
    }