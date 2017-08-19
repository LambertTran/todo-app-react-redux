import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

//import action: fetch single task
import {fetchTask} from '../actions';

class ShowTask extends Component{

  // componentWillMount(){
  //   const {id} = this.props.match.params;
  //   this.props.fetchTask(id);
  // }

  renderSingleTask(task){
    return (
      <div>
        <h1>Task: {task.title}</h1>
        <h3>Something Go Here</h3>
      </div>
    )
  }

  render() {
    const task = this.props.task;
    return (
      <div>
        {this.renderSingleTask(task)}
        <Link className="btn btn-primary" to="/">Back</Link>
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