import React        from 'react'
import image1       from './images/2.png'
import image2       from './images/1.png'
import image3       from './images/3.png'
import image4       from './images/4.png'
import image5       from './images/14.png'
import image6       from './images/35.png'
import                   './Manufactures.css'
import DivAnchor    from '../tags/DivAnchor'

class Manufactures extends React.Component{
    render(){
        return(
            <div className='container'>
                <h4 class="title"><span class="text">Manufactures</span></h4>
				<div class="row">
                    <DivAnchor
                        src ={image1}/>	
                    <DivAnchor
                        src ={image2}/>
                    <DivAnchor
                        src ={image3}/>
                    <DivAnchor
                        src ={image4}/>
                    <DivAnchor
                        src ={image5}/>
                    <DivAnchor
                        src ={image6}/>



				</div>
            </div>
        )
    }
}
export default Manufactures