import React            from 'react'
import image            from './slideshowimages/banner-1.jpg'
import image1           from './slideshowimages/banner-2.jpg'
import ListTag          from '../tags/ListTag'
import DivImage         from '../tags/DivImage'
import ImageslideArrow  from '../tags/ImageslideArrow'
import                       './Slideshow.css'


class Slideshow extends React.Component{
    render(){
        return(
        <div class  ="container">
            <div id ="myCarousel" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                  <ListTag
                    data1     ='#myCarousel'
                    data2     ='0'
                    className ='active'
                    />
                  <ListTag
                    data1     ='#myCarousel'
                    data2     ='1'
                    />  
                  <ListTag
                    data1     ='#myCarousel'
                    data2     ='2'
                    />                
              </ol>
          
              <div class="carousel-inner">
                  <DivImage
                    className ='item active'
                    image     ={image}
                    alt       ='Los Angeles'
                    />
                  <DivImage
                    className ='item'
                    image     ={image1}
                    alt       ='Chicago'
                    />
              </div>

                <ImageslideArrow
                    className ='left carousel-control'
                    href      ='#myCarousel'
                    slide     ='prev'
                    class1    ='glyphicon glyphicon-chevron-left'
                    class2    ='sr-only'
                    text      ='Previous'/>
                <ImageslideArrow
                    className ='right carousel-control'
                    href      ='#myCarousel'
                    slide     ='next'
                    class1    ='glyphicon glyphicon-chevron-right'
                    class2    ='sr-only'
                    text      ='Next'/>
            </div>
          </div>
        )
    }
}
export default Slideshow