import React from 'react'
import Anchor from './Anchor'
import ListwithAnchor from './ListwithAnchor'

class DropdownwithAnchor extends React.Component{
    render(){
        return(
            <li className={this.props.className}>
                <Anchor className={this.props.aclassName}
                        href={this.props.href}
                        value={this.props.text}/>
                        <ul>
                            <ListwithAnchor
                                text={this.props.value1}
                                href='/#'/>
                            <ListwithAnchor
                                text={this.props.value2}
                                href='/#'/>
                            <ListwithAnchor
                                text={this.props.value3}
                                href='/#'/>
								</ul>
            </li>
        )
    }
}
export default DropdownwithAnchor