/*==========================================
                    Package
/*==========================================*/

import React,{Component} from 'react';
import {connect} from 'react-redux'
import {Field,reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';

/** Function handles creating new task from action */
import {createTask} from '../actions';



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
        <div className="inside-box">
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field label="Title" name="title" component={this.renderField}/>
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