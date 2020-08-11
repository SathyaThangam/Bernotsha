import React 			from 'react'
import 						 './Featured.css'
import cloth1 			from './images/clothes/cloth1.jpg'
import ImageslideArrow 	from '../tags/ImageslideArrow'
import Productslide 	from '../tags/Productslide'

class Featured extends React.Component{
    render(){
        return(
            <div className		='container'>
               	<h4 className	="title">
					<span className	="pull-left"><span class="text"><span class="line">{this.props.title} <strong>{this.props.name}</strong></span></span></span>
					<span className	="pull-right">
						<ImageslideArrow
							className	='left button'
							href		={this.props.slideid}
							slide		='prev'
							/>
						<ImageslideArrow
							className	='right button'
							href		={this.props.slideid}
							slide		='next'
							/>											
					</span>
				</h4>
                <div id={this.props.id} class="myCarousel carousel slide">
					<div class="carousel-inner">
						<Productslide
							src1		={this.props.src1}
							src2		={this.props.src2}
							src3		={this.props.src3}
							src4		={this.props.src4}
							src5		={this.props.src5}
							className	='item active'
							/>
						<Productslide
							src1		={this.props.src6}
							src2		={this.props.src7}
							src3		={this.props.src8}
							src4		={this.props.src9}
							src5		={this.props.src10}							
							className	='item'
							/>
					</div>
				</div>
            </div>
        )
    }
}
export default Featured