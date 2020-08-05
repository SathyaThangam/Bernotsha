import React from 'react';
class TextView extends React.Component {
    render(){
    return (
        <div
         className={this.props.className}
        >
            {this.props.text}
        </div>
    );
  }
  }
  
  export default TextView;