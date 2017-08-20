import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class WellCome extends Component{
  render() {
    return (
      <div className="main-box">
        <h1>Wellcome</h1>
        <div className="btnProps">
          <Link to='/users/login' 
            className="btn btn-primary btn-lg">Login</Link>
        </div>
        <div className="btnProps">
          <Link to='/users/new' 
            className="btn btn-primary btn-lg">Create New Account</Link>
        </div>
      </div>
    );
  }
} 

export default WellCome;