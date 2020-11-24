import React, { Component } from "react";
import "./Skills.css"
import data from "../data.json";

export default class Skills extends Component {

    render() {   

      return (
            <div class="container" id="skills">
            <h3>skills</h3>
            <div class="bar learning" data-skill="OpenGL"></div>
            
            
            <div class="bar learning" data-skill="CSS"></div>
            <div class="bar learning" data-skill="React"></div>

            <div class="bar one learning2" data-skill="HTML"></div>
            <div class="bar one learning2" data-skill="Javascript"></div>
            
            
            <div class="bar two basic" data-skill="C++"></div>
            <div class="bar two basic" data-skill="Matlab"></div>
            <div class="bar three intermediate" data-skill="CEH"></div>
            <div class="bar three intermediate" data-skill="Mathematica"></div>
            <div class="bar three intermediate" data-skill="SQL server"></div>
            <div class="bar four expert" data-skill="Python"></div>
            <div class="bar four expert" data-skill="Mathematics"></div>
          </div>

      );
    }
  }
