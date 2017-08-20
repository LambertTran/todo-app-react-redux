/*===========================================================

                          Packages

/*===========================================================*/
import React,{Component} from 'react';
import {connect} from 'react-redux'
import {Field,reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';

import {newUser} from '../actions';



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
        <h1>New User</h1>
        <div className="inside-box" >
          <form 
            className="form-horizontal" 
            onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field label="Email" name="email" component={this.renderField}/>
            <Field label="Password" name="password" component={this.renderField}/>
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