import React from 'react'

class Featureshow extends React.Component{
    render(){
        return(
            <div class="span4">
                <div class="service">
                    <div class={this.props.className}>	
                        <img src={this.props.src} alt="" />
                        <h4>{this.props.name1} <strong>{this.props.name2}</strong></h4>
                        <p>{this.props.text}</p>									
                    </div>
                </div>
            </div>
        )
    }

}
export default Featureshow