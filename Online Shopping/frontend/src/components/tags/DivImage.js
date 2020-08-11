import React from 'react'

class DivImage extends React.Component{
    render(){
        return(
            <div class={this.props.className}>
            <img src={this.props.image} alt={this.props.alt} />
          </div>
        )
    }
}
export default DivImage;