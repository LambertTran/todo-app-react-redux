/*===========================================================

                          Packages

/*===========================================================*/

import React,{Component} from 'react';
import {Link} from 'react-router-dom';


/*===========================================================

                          Body

/*===========================================================*/

class WellCome extends Component{
  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <div className="main-box">
          <h1>Welcome</h1>
          <div className="btnProps">
            <Link to='/users/login' 
              className="btn btn-primary btn-lg">Login</Link>
          </div>
          <div className="btnProps">
            <Link to='/users/new' 
              className="btn btn-primary btn-lg">Create New Account</Link>
          </div>
        </div>
      </div>
    );
  }
} 

export default WellCome;