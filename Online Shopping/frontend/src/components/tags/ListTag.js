import React from 'react'

class ListTag extends React.Component{
    render(){
        return(
            <li 
                data-target='this.props.data1'
                data-slide-t='this.props.data2'
                className='this.props.className'
                />
        )
    }
}
export default ListTag;