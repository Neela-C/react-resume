
import React, { Component } from "react";
import data from "../data.json";
import "./TitleSection.css";
import { SocialIcon } from 'react-social-icons';
import ScrollButton from "./ScrollButton";


export default class TitleSection extends Component {

  render() {   

    return (
        <div className = "titlePage" id="title">
            
          <h1 className = "title">
          {data.title}
          </h1>
          
          <div>
              <h3>
              {data.subtitle}
              </h3>
          </div>
          <div>
              
              {<SocialIcon url= {"https://github.com/Neela-C"} style={{ height: 50, width: 50 }} /> }
              {<SocialIcon url= {"https://www.linkedin.com/in/niloufar-ashayeri-3a57607a/"} style={{ height: 50, width: 50 }} />}
              {<SocialIcon url= {"https://mail.google.com}"} style={{ height: 50, width: 50 }} />}
              
          </div>
          <ScrollButton goto="about" icon={data.icons.down} className="goto-about" />
      </div>
    );
  }
}