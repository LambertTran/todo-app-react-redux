/*===========================================================

                          Packages

/*===========================================================*/

import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

/*===========================================================

                          Body

/*===========================================================*/

class ShowTask extends Component{

  // render a task when onclicked
  renderSingleTask(task){
    return (
      <div>
        <h1>Task: {task.title}</h1>
        <h4>Completion: {task.complete.toString()}</h4>
      </div>
    )
  }

  render() {
    const task = this.props.task;
    return (
      <div className="show-task">
        {this.renderSingleTask(task)}
        <Link className="btn btn-primary btn-lg" to="/tasks">Back</Link>
      </div>
    );
  }
}

function mapStateToProps({tasks},ownProps){
  return{
    task:tasks[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps)(ShowTask);