/*==========================================
                    Package
/*==========================================*/

import React,{Component} from 'react';
import {connect} from 'react-redux'
import {reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';

/** Function handles creating new task from action */
import {createTask} from '../actions';
import FieldForm from './field-form';



/*==========================================
                    Body
/*==========================================*/

class NewTask extends Component{

  onSubmit(value){
    this.props.createTask(value, () =>{
      this.props.history.push('/tasks');  // go back to homepage
    });
  }


  render() {
    const {handleSubmit} = this.props;
    return (
      <div className="main-box">
        <h1>Create New Task</h1>
        <div className="inside-box">
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <FieldForm name="title" type="text"/>
            <button type="submit" className="btn btn-primary btn-lg">Add</button>
            <Link to="/tasks" className="btn btn-danger btn-lg">Cancel</Link>
          </form>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form:'NewTask'
})(connect(null,{createTask})(NewTask));