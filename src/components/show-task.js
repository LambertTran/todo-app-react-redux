import React,{Component} from 'react';
import {connect} from 'react-redux';

import {fetchTask} from '../actions';

class ShowTask extends Component{

  componentDidMount(){
    const {id} = this.props.match.params;
    this.props.fetchTask(id);
  }

  render() {
    return (
      <div>
        <h3>Task</h3>
        {}
      </div>
    );
  }
}

// function mapStateToProps({tasks},ownProps){
//   return {
//     task:tasks[ownProps.match.params.id]
//   }
// }


export default connect(null,fetchTask)(ShowTask);