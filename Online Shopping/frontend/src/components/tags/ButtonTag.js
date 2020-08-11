import React from 'react'

class ButtonTag extends React.Component{
    render(){
        return(
            <button 
                className={this.props.className}
                type={this.props.type}
                data-toggle={this.props.data1}
                data-target={this.props.data2}>
                 <span class="navbar-toggler-icon"></span>

                </button>
        )
    }
}
export default ButtonTag;