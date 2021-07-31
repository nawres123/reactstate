

import React, { Component } from 'react';
import './App.css';


  export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
     
       FullName: "Nawres",
       bio: "my name is nawres i m from grombalia i m 23 years old",
       img:'./nawres.jpg',
       profession:" industrial electronics technician",

      
      show: true,
      count:0,
    };
  }
  componentDidMount  () {
    setInterval ( ()=> {
      this.setState( count=> ({ count:this.state.count+1}));
    }, 1000)
          }

  render() {
    return (
      <div>
      
    {
        this.state.show?
      <div>
        <h1>My name is {this.state.FullName}</h1>
        <p>
          bio: {this.state.bio}
          <br/>
          <img src ={this.state.img}  alt= ""/>
          <br/>
          i'm {this.state.profession}.
        </p>
        <button onClick={() => this.setState({show: !this.state.show})} className= "btn"> Toggle </button>
        </div>:null
    }
        
     
  
       { this.state.show? <p>{this.state.count} </p>
       : null}
       </div>
    );

  }
}
  
