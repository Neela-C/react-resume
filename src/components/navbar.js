
import React, { Component } from "react";
import "./navbar.css"

export default class navbar extends Component {
    render() {
        return(
            <div className = "Navbar">
                
                <ul>
                <li><a class="active" href="#title">Contact</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#about">Projects</a></li>
                </ul>


            </div>
        )
    }
}