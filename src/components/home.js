import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import welcome from '../images/welcome.png';

class Home extends Component{
  render(){
    return (
      <div className="home">
        <h1>Welcome to Todo app</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h3>Productivity</h3>
              <h3>Efficiency</h3>
            </div>
            <div className="col-md-9">
              <img src={welcome} className="img-responsive" alt="Responsive image"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
