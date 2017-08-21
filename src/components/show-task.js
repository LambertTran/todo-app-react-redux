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

  handleDelete(event){
    event.history.push('/tasks');  // go tasks page
  }

  render() {
    const {handleSubmit} = this.props;
    const task = this.props.task;
    return (
      <div className="show-task">
        {this.renderSingleTask(task)}
        <Link className="btn btn-primary btn-lg" to="/tasks">Back</Link>
        <button 
          onClick={this.handleDelete(this.props)} 
          className="btn btn-danger btn-lg">Delete</button>
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