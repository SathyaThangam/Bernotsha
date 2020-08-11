import React from 'react'
import './Navigation.css'
import DropdownwithAnchor from '../tags/DropdownwithAnchor';
import ListwithAnchor from '../tags/ListwithAnchor';

class Navigation extends React.Component{
    render(){
        return(
            <div className      ='container' >
                <div className  ='content'>
                <section class  ="navbar">	
					<nav id     ="menu" >
						<ul>
                            <DropdownwithAnchor
                                className   ='drop'
                                href        ='/#'
                                text        ='Woman'
                                value1      ='Lacinia nibh'
                                value2      ='Egmet molestie'
                                value3      ='Varius purus'>
							</DropdownwithAnchor>															
							<ListwithAnchor
                                href        ='/#'
                                text        ='Man'/>
                            <DropdownwithAnchor
                                className   ='drop'
                                href        ='/#'
                                text        ='Sport'
                                value1      ='Gifts and Tech'
                                value2      ='Ties and Hats'
                                value3      ='Cold Weather'>
							</DropdownwithAnchor>									
                            <ListwithAnchor
                                href        ='/#'
                                text        ='Handbag'/>							
                            <ListwithAnchor
                                href        ='/#'
                                text        ='Best seller'/>								
                            <ListwithAnchor
                                href        ='/#'
                                text        ='Top seller'/>	
						</ul>
					</nav>
				
			</section>

                </div>
            </div>
        )
    }
}
export default Navigation;