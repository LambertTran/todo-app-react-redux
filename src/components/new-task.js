import React,{Component} from 'react';
import {connect} from 'react-redux'
import {Field,reduxForm} from 'redux-form';

import {createTask} from '../actions';

class NewTask extends Component{

  onSubmit(value){
    this.props.createTask(value, () =>{
      this.props.history.push('/');  // go back to homepage
    });
  }

  render() {
    const {handleSubmit} = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field label="Title" name="title" component="input"/>
          <button type="submit" className="btn btn-success">Save</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form:'NewTask'
})(connect(null,{createTask})(NewTask));