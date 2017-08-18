import React,{Component} from 'react';
import {connect} from 'react-redux'
import {Field,reduxForm} from 'redux-form';

import {newUser} from '../actions';

class NewUser extends Component{
  
  onSubmit(value){
    this.props.newUser(value, () =>{
      this.props.history.push('/');  // go back to homepage
    });
  }

  render() {
    const {handleSubmit} = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field label="Title" name="email" component="input"/>
          <Field label="Title" name="password" component="input"/>
          <button type="submit" className="btn btn-success">Save</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form:'NewUser'
})(connect(null,{newUser})(NewUser));