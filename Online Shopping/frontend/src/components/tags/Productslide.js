import React from 'react'
import Productsshow from './Productsshow';

class Productslide extends React.Component{
    render(){
        return(
                <div class={this.props.className}>
					<ul class="thumbnails">	
                        <div className='row'>
                            <Productsshow
                                src         ={this.props.src1}
                                ahref       ='/#'
                                bhref       ='/#'
                                bclassName  ='title'
                                bvalue      ='Ut wisi enim ad'
                                chref       ='/#'
                                cclassName  ='category'
                                cvalue      ='Commodo consequat'
                                prize       ='$17.25'
                                />
                            <Productsshow
                                src         ={this.props.src2}
                                ahref       ='/#'
                                bhref       ='/#'
                                bclassName  ='title'
                                bvalue      ='Quis nostrud exerci tation'
                                chref       ='/#'
                                cclassName  ='category'
                                cvalue      ='Quis nostrud'
                                prize       ='$32.50'
                                />
                            <Productsshow
                                src         ={this.props.src3}
                                ahref       ='/#'
                                bhref       ='/#'
                                bclassName  ='title'
                                bvalue      ='Know exactly turned'
                                chref       ='/#'
                                cclassName  ='category'
                                cvalue      ='Quis nostrud'
                                prize       ='$14.20'
                                />										
                            <Productsshow
                                src         ={this.props.src4}
                                ahref       ='/#'
                                bhref       ='/#'
                                bclassName  ='title'
                                bvalue      ='You think fast'
                                chref       ='/#'
                                cclassName  ='category'
                                cvalue      ='World once'
                                prize       ='$31.45'
                                />
                            <Productsshow
                                src         ={this.props.src5}
                                ahref       ='/#'
                                bhref       ='/#'
                                bclassName  ='title'
                                bvalue      ='You think fast'
                                chref       ='/#'
                                cclassName  ='category'
                                cvalue      ='World once'
                                prize       ='$31.45'
                                />                               

                        </div>
					</ul>
				</div>
										
									
        )
    }
}
export default Productslide;