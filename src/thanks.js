import React, { Component } from 'react';
import * as firebase from 'firebase';
import './App.css';
import {hashHistory,Link} from 'react-router';
import Signup from './signup';
import Header from './header';


export default class hanks extends Component{
    render(){
        return(<div>
       <Header/>        <center>
        <p>Thank You,You are Awesome! You have contributed to save humanity!</p>
        </center>
        </div>

        )
    }
}





