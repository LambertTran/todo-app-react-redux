import React, {Component} from 'react';
import {Field} from 'redux-form';


class FieldForm extends Component{

    /** Render components for particular field */
  renderField(field){
    return(
      <div className="form-group has-danger">
        <label htmlFor="title">{field.label}</label>
        <input 
          type={field.type}
          className="form-control"
          {...field.input}/>
      </div>
    )
  }

  render() {
    return (
      <div>
        <Field 
          label={this.props.name} 
          name={this.props.name} 
          type={this.props.type}
          component={this.renderField} />
      </div>
    );
  }
}

export default FieldForm;