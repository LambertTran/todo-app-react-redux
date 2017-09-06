import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import homepic from '../images/homepic.png';

class Home extends Component{
  render(){
    return (
      <div className="home">
        <h1>Welcome to Todo app</h1>
        <h2>Get life under control</h2>
        <Link to="/users" className="btn btn-primary btn-lg"> Get Start </Link>
        <img src={homepic} className="img-responsive" alt="Responsive image"/>
      </div>
    )
  }
}

export default Home;
