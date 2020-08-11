import React from 'react'
import Anchor from './Anchor';

class Productsshow extends React.Component{
    render(){
        return(
                <li class="span3">
					<div class="product-box">
						<span class="sale_tag"></span>
							<p><a href={this.props.ahref}><img src={this.props.src} alt="not found" /></a></p>
                            
                            <Anchor
                                href        ={this.props.bhref} 
                                className   ={this.props.bclassName}
                                value       ={this.props.bvalue}/>
							<br/>

                            <Anchor
                                href        ={this.props.chref} 
                                className   ={this.props.cclassName}
                                value       ={this.props.cvalue}/> 

							<p class="price">{this.props.prize}</p>
					</div>
				</li>
        )
    }
}
export default Productsshow;