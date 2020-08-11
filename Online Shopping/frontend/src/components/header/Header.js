import React            from 'react'
import Anchor           from '../tags/Anchor'
import InputTag         from '../tags/InputTag'
import ButtonTag        from '../tags/ButtonTag'
import ListwithAnchor   from '../tags/ListwithAnchor'
import                       './Header.css'


class Header extends React.Component{
    render(){
        return(
            <div className      ='container'>
            <nav class          ="navbar navbar-expand-md bg-primary navbar-dark">
                <Anchor
                    className   ='navbar-brand'
                    href        ='#'
                    value       ='CODINGMART'/>
                <form class="form-inline" action="/action_page.php">
                    <InputTag
                        className   ='form-control mr-sm-2'
                        type        ='text'
                        placeholder ='Search'/>
                </form>
                <ButtonTag
                    className   ='navbar-toggler btn'
                    type        ='button'
                    data1       ='collapse'
                    data2       ='#collapsibleNavbar'
                    text        =''>
                </ButtonTag>

                <div class  ="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class   ="navbar-nav left ">
                    <ListwithAnchor
                        className   ='nav-item'
                        aclassName  ='nav-link link'
                        text        ='MY ACCOUNT'
                        href        ='#'/>
                    <ListwithAnchor
                        className   ='nav-item'
                        aclassName  ='nav-link link'
                        text        ='YOUR CART'
                        href        ='#'/>
                    <ListwithAnchor
                        className   ='nav-item'
                        aclassName  ='nav-link link'
                        text        ='CHECK OUT'
                        href        ='#'/>
                    <ListwithAnchor
                        className   ='nav-item'
                        aclassName  ='nav-link link'
                        text        ='LOGIN'
                        href        ='#'/>
                </ul>
            </div>  
        </nav>
                   
        </div>


        )
    }
}
export default Header;