import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import _ from 'lodash';

//actions
import {fetchAllTasks} from '../actions';

class IndexTasks extends Component{

  componentDidMount(){
    this.props.fetchAllTasks();
  }

  renderTasks(){
    return _.map(this.props.tasks, (task) => {
      return (
        <li 
          className="list-group-item"
          key={task._id}>
          <Link to={`/tasks/${task._id}`}>
            {task.title}
          </Link>
        </li>
      )
    });
  }

  render() {
    return (
      <div>
        <h1>Tasks: </h1>
        <ul className="list-group">
        {this.renderTasks()}
        </ul>
        <Link to="/tasks/new" className="btn btn-primary">
          New Task
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    tasks:state.tasks
  }
}

export default connect(mapStateToProps,{fetchAllTasks})(IndexTasks);