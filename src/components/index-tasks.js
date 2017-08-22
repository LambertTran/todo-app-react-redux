/*===========================================================

                          Packages

/*===========================================================*/

import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import _ from 'lodash';

// import fetch function from actions
import {fetchAllTasks} from '../actions';
import {deleteTask} from '../actions';


/*===========================================================

                          Body

/*===========================================================*/

class IndexTasks extends Component{

  // after components mount, fetch all data
  componentDidMount(){
    this.props.fetchAllTasks();
  }


  handleDelete(id){
    this.props.deleteTask(id);
  }

  // render all the tasks in a list
  renderTasks(){
    return _.map(this.props.tasks, (task) => {
      return (
        <div className="task-item" key={task._id}>
          <div className="detail">
            <Link to={`/tasks/${task._id}`}>
              <div key={task._id}>
                <h3>{task.title}</h3>
                <h4>Completion: {task.complete.toString()}</h4>
              </div>
            </Link>
          </div>
          <div className="option">
            <button 
              onClick={(event) =>this.handleDelete(task._id)} 
              className="btn btn-danger btn-lg">Delete</button>
          </div>
        </div>
      )
    });
  }

  render() {
    return (
      <div className="tasks-container">
        <div className="row1">
          <div className="btn-opt">
            <Link to="/users/login" className="btn btn-primary btn-lg pull-right"> Log Out </Link>
            <Link to="/tasks/new" className="btn btn-primary btn-lg pull-right"> New Task </Link>
          </div>
          <div className="title">
            <h1>Tasks: </h1>
          </div>
        </div>
        <div className="row2">
            {this.renderTasks()}
        </div>
      </div>
    );
  }
}

/** connect map state in store to props in component */
function mapStateToProps(state){
  return{
    tasks:state.tasks
  }
}

export default connect(mapStateToProps,{fetchAllTasks,deleteTask})(IndexTasks);