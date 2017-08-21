/*===========================================================

                          Packages

/*===========================================================*/

import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import _ from 'lodash';

// import fetch function from actions
import {fetchAllTasks} from '../actions';



/*===========================================================

                          Body

/*===========================================================*/

class IndexTasks extends Component{

  // after components mount, fetch all data
  componentDidMount(){
    this.props.fetchAllTasks();
  }

  // render all the tasks in a list
  renderTasks(){
    return _.map(this.props.tasks, (task) => {
      return (
        <div key={task._id} className="col-md-3">
          <Link to={`/tasks/${task._id}`}>
            <div className="task-item" key={task._id}>
              <h3>{task.title}</h3>
              <h4>Completion: {task.complete.toString()}</h4>
            </div>
          </Link>
        </div>
      )
    });
  }

  render() {
    return (
      <div className="tasks-container">
        <div className="row1">
          <Link to="/users/login" className="btn btn-primary btn-lg pull-right"> Log Out </Link>
          <Link to="/tasks/new" className="btn btn-primary btn-lg pull-right"> New Task </Link>
          <h1>Tasks: </h1>
        </div>
        <div className="row2">
          <div className="row">
            {this.renderTasks()}
          </div>
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

export default connect(mapStateToProps,{fetchAllTasks})(IndexTasks);