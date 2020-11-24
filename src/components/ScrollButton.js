import React, { Component } from "react";
import { Link } from "react-scroll";
import "./ScrollButton.css";

export default class ScrollButton extends Component{
    render(){
        const { icon, goto, className} = this.props;

        return (
            <div className= {`button ${className}`}>
                <Link
                    activeClass="active"
                    to={goto}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    onSetActive={this.handleSetActive}
                >
                    <img src={icon} alt="button" style={{maxWidth:"15px"}}/>
                </Link>
            </div>
        )
    }
}