/*==========================================
                    Package
/*==========================================*/

import React,{Component} from 'react';
import {connect} from 'react-redux'
import {reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';

import {userLogin} from '../actions';
import FieldForm from './field-form';



/*==========================================
                    Body
/*==========================================*/

class UserLogin extends Component{

    constructor(props) {
    super(props);
    this.state = {validation:false}
  }

  /** Create new user when submitted new form */
  onSubmit(value){
    this.props.userLogin(value, () =>{
      this.props.history.push('/tasks');  // go tasks page
    }, () => this.setState({validation:true}));
  }
  
  handleError(){
    if(this.state.validation === false){
      return <div></div>
    }
    return (
      <div>Wrong email or password</div>
    )
  }

  /** Render components for particular field */
  renderField(field){
    return(
      <div className="form-group has-danger">
        <h3 className="white-text">{field.label}</h3>
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
        <h2>{this.handleError()}</h2>
        <div className="inside-box" >
          <form 
            className="form-horizontal" 
            onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <FieldForm name="email" type="text" />
            <FieldForm name="password" type="password" />
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