/*==========================================
                    Package
/*==========================================*/

import React, {Component} from 'react';
import {Field} from 'redux-form';



/*==========================================
                    Body
/*==========================================*/

class FieldForm extends Component{

    /** Render components for particular field */
  renderField(field){
    return(
      <div className="form-group has-danger">
        <h3 className="white-text">{field.label}</h3>
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