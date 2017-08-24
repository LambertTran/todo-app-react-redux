/*==========================================
                    Package
/*==========================================*/
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import _ from 'lodash';

// import fetch function from actions
import {fetchAllTasks} from '../actions';
import {deleteTask} from '../actions';
import {updateTask} from '../actions';


/*==========================================
                    Body
/*==========================================*/

class IndexTasks extends Component{

  // after components mount, fetch all data
  componentDidMount(){
    this.props.fetchAllTasks();
  }


  handleDelete(id){
    this.props.deleteTask(id);
  }

  handleFinish(id){
    this.props.updateTask(id);
  }

            // <Link to={`/tasks/${task._id}`}>
            // </Link>

  renderStatus(status){
    if (status === true){
      return <h4>Completion: Yes </h4>
    }
    return <h4>Completion: No </h4>
  }

  /** render all the tasks in a list */
  renderTasks(){
    return _.map(this.props.tasks, (task) => {
      return (
        <div className="task-item" key={task._id}>
          <div className="detail">
            <div key={task._id}>
              <h3>{task.title}</h3>
              {this.renderStatus(task.complete)}
            </div>
          </div>
          <div className="option">
            <button 
              onClick={
                (event) => this.handleFinish(task._id)
              } 
              className="btn btn-success btn-lg">
              Finish
            </button>
            <button 
              onClick={
                (event) => this.handleDelete(task._id)
              } 
              className="btn btn-danger btn-lg">
              Delete
            </button>
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

export default connect(
    mapStateToProps,
    {fetchAllTasks,deleteTask,updateTask}
  )(IndexTasks);