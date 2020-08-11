import React            from 'react'
import Header           from '../components/header/Header'
import Navigation       from '../components/navigationbar/Navigation';
import Slideshow        from '../components/slideshow/Slideshow';
import Featured         from '../components/featured/Featured';
import Featurebox       from '../components/featurebox/Featurebox';
import Footer           from '../components/Footer/Footer';
import Manufactures     from '../components/Manufactures/Manufactures';

import cloth1           from '../components/featured/images/clothes/9.jpg'
import cloth2           from '../components/featured/images/clothes/1.jpg'
import cloth3           from '../components/featured/images/clothes/2.jpg'
import cloth4           from '../components/featured/images/clothes/3.jpg'
import cloth5           from '../components/featured/images/clothes/4.jpg'
import cloth6           from '../components/featured/images/clothes/5.jpg'
import cloth7           from '../components/featured/images/clothes/6.jpg'
import cloth8           from '../components/featured/images/clothes/7.jpg'
import cloth9           from '../components/featured/images/clothes/8.jpg'
import cloth10          from '../components/featured/images/clothes/9.jpg'

class Homepage extends React.Component{
    render(){
        return(
            <div className="app">
            <Header/>
      
            <Navigation/>
            <Slideshow/>
            <Featured
              title='Featured'
              name='Products'
              src1={cloth1}
              src2={cloth2}
              src3={cloth3}
              src4={cloth4}
              src5={cloth5}
              src6={cloth6}
              src7={cloth7}
              src8={cloth8}
              src9={cloth9}
              src10={cloth10}
              slideid='#myCarousel1'
              id='myCarousel1'/>
            <Featured
              title='Latest'
              name='Products'
              src1={cloth3}
              src2={cloth7}
              src3={cloth5}
              src4={cloth4}
              src5={cloth1}
              src6={cloth6}
              src7={cloth7}
              src8={cloth1}
              src9={cloth8}
              src10={cloth10}
              slideid='#myCarousel2'
              id='myCarousel2'/>  
      
            <Featurebox/>
            <Manufactures/>  
      
            <Footer/> 
      
      
          </div>
        )
    }
}
export default Homepage;