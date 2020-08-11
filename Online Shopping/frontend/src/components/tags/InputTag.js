import React from 'react'

class InputTag extends React.Component{
    render(){
        return(
            <input 
                type={this.props.type}
                className={this.props.className}
                placeholder={this.props.placeholder}
                />

        )
    }
}
export default InputTag;