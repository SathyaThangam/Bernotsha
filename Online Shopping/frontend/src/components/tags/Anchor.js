import React from 'react'

class Anchor extends React.Component{
    render(){
        return(
            <a className={this.props.className} href={this.props.href}>{this.props.value}</a>
        )
    }
}
export default Anchor;