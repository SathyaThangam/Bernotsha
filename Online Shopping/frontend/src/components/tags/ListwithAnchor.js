import React from 'react'
import Anchor from './Anchor'

class ListwithAnchor extends React.Component{
    render(){
        return(
            <li className={this.props.className}>
                <Anchor className={this.props.aclassName}
                        href={this.props.href}
                        value={this.props.text}/>
            </li>
        )
    }
}
export default ListwithAnchor;