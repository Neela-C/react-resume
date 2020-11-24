import React, { Component } from "react";
import "./AboutSection.css"
import data from "../data.json";
import ScrollButton from "./ScrollButton";

export default class AboutSection extends Component {

    render() {   

      return (
          <div className="about-section" id="about">
            <h3>{data.sections[0].title}</h3>

            <p>{data.sections[0].items[0].content}</p>

            <ScrollButton goto="skills" icon={data.icons.down} className="goto-skills" />
          </div>
      );
    }
  }