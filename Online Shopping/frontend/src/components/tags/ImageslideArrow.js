import React from 'react'

class ImageslideArrow extends React.Component{
    render(){
        return(
            <a class={this.props.className} href={this.props.href} data-slide={this.props.slide}>
            <span class={this.props.class1}></span>
            <span class={this.props.class2}>{this.props.text}</span>
          </a>
        )
    }
}
export default ImageslideArrow;