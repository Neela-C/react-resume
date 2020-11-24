import "./ThemeButton.css";
import React, { Component } from "react";
import Snow from "./Snow";


export default class ThemeButton extends Component{
    state = {
        snow :false
        }
    setTheme=(themeName) =>{
        localStorage.setItem('theme', themeName);
        document.documentElement.className = themeName;
        }

    toggleTheme1=() =>{
    if (localStorage.getItem('theme') === 'theme-dark') {
        this.setTheme('theme-light');
        this.setState({snow: false});
    } 
    else if (localStorage.getItem('theme') === 'theme-light') {
        this.setTheme('theme-purple');
        this.setState({snow: false});
    }
    else if (localStorage.getItem('theme') === 'theme-purple') {
        this.setTheme('theme-blue');
        this.setState({snow: true});
    }
    else {
        this.setTheme('theme-dark');
        this.setState({snow: false});
    }
}

    render() {

        if (this.state.snow == true){
            return(
                <div className="container">
                    <button id="switch" onClick={this.toggleTheme1}>Switch</button>
                    <Snow />
                </div>
                )
        }
        else{
        return(
        <div className="container">
            <button id="switch" onClick={this.toggleTheme1}>Switch</button>
            
        </div>
        )
    }
}
}