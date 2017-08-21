/*===========================================================

                          Packages

/*===========================================================*/

import React,{Component} from 'react';
import {connect} from 'react-redux'
import {reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';

import {newUser} from '../actions';
import FieldForm from './field-form';


/*===========================================================

                          Body

/*===========================================================*/

class NewUser extends Component{

  /** Create new user when submitted new form */
  onSubmit(value){
    this.props.newUser(value, () =>{
      this.props.history.push('/tasks');  // go tasks page
    });
  }


  render() {
    const {handleSubmit} = this.props;
    return (
      <div className="main-box">
        <h1>New User</h1>
        <div className="inside-box" >
          <form 
            className="form-horizontal" 
            onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <FieldForm name="email" type="text"/>
            <FieldForm name="password" type="password"/>
            <button type="submit" className="btn btn-primary btn-lg">Create</button>
            <Link to="/" className="btn btn-primary btn-lg">Cancel</Link>
          </form>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form:'NewUser'
})(connect(null,{newUser})(NewUser));