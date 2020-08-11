import React            from 'react'
import                       './Featurebox.css'
import feature1         from '../featurebox/images/feature1.png'
import feature2         from '../featurebox/images/feature2.png'
import feature3         from '../featurebox/images/feature3.png'
import Featureshow      from '../tags/Featureshow';

class Featurebox extends React.Component{
    render(){
        return(
            <div className='container'>
                <div class="row feature_box">
                    <Featureshow
                        src         ={feature1}
                        className   ='responsive'
                        name1       ='MODERN'
                        name2       ='DESIGN'
                        text        ='Lorem Ipsum is simply dummy text of the printing and printing'/>						
                    <Featureshow
                        src         ={feature2}
                        className   ='customize'
                        name1       ='FREE'
                        name2       ='SHIPPING'
                        text        ='Lorem Ipsum is simply dummy text of the printing and printing'/>
                    <Featureshow
                        src         ={feature3}
                        className   ='support'
                        name1       ='24/7 LIVE'
                        name2       ='SUPPORT'
                        text        ='Lorem Ipsum is simply dummy text of the printing and printing'/>
		
                </div> 
            </div>
        )
    }
}
export default Featurebox;