import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';

class Formfield extends Component{
  render () {
    return (
      
      <form>

    <div className="field">
    <label className="label">Name</label>
    <div className="control">
      <input className="input" type="text" placeholder="e.g Alex Smith"/>
    </div>
  </div>

      <div className="field">
    <label className="label">Email</label>
    <div className="control">
      <input className="input" type="email" placeholder="e.g. alexsmith@gmail.com"/>
    </div>
  </div>

    </form>

      )
  }
}

export default Formfield;