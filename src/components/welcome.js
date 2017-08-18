import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class WellCome extends Component{
  render() {
    return (
      <div>
        <h1>Wellcome</h1>
        <Link to='/users/new' 
          className="btn btn-primary">Create New User</Link>
        <Link to='/users/login' 
          className="btn btn-primary">Login</Link>
      </div>
    );
  }
} 

export default WellCome;