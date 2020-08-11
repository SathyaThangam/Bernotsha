import React from 'react'

class DivAnchor extends React.Component{
    render(){
        return(
            <div class="span2">
                <a href="#"><img alt="" src={this.props.src}/></a>
            </div>
        )
    }
}
export default DivAnchor