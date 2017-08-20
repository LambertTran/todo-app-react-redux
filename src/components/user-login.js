/*===========================================================

                          Packages

/*===========================================================*/

import React,{Component} from 'react';
import {connect} from 'react-redux'
import {Field,reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';

import {userLogin} from '../actions';



/*===========================================================

                          Body

/*===========================================================*/
class UserLogin extends Component{

  /** Handle button submitting */
  onSubmit(value){
    this.props.userLogin(value, () =>{
      this.props.history.push('/tasks');  // go back to tasks page
    });
  }

  /** Render components for particular field */
  renderField(field){
    return(
      <div className="form-group has-danger">
        <label htmlFor="title">{field.label}</label>
        <input 
          type="text" 
          className="form-control"
          {...field.input}/>
      </div>
    )
  }

  render() {
    const {handleSubmit} = this.props;
    return (
      <div className="main-box">
        <h1>Log in</h1>
        <div className="inside-box" >
          <form 
            className="form-horizontal" 
            onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field label="Email" name="email" component={this.renderField}/>
            <Field label="Password" name="password" component={this.renderField}/>
            <button type="submit" className="btn btn-primary btn-lg">Login</button>
            <Link to="/" className="btn btn-primary btn-lg">Cancel</Link>
          </form>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form:'UserLogin' // connect to reducer
})(connect(null,{userLogin})(UserLogin));