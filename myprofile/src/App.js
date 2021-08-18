import { useState } from "react";
import React from "react";
import Nav from "./components/navbar";
import code from "./Photos/code.jpg";
import think from "./Photos/think.jpg";
import "./components/navbar.css";
import me from "./Photos/me.jpg";
import Bio from "./Photos/Logo/bio";
import {Route,Switch,BrowserRouter as Router,Link} from "react-router-dom"
import Py from "./base/pyhtonprojects";
import Webdev from "./base/webprojects";
import Certificate from "./base/certificates";
import Contacts from "./components/contact";
import python from "./Photos/Logo/python.png";
import reacttt from "./Photos/Logo/reacttt.png";
import django from "./Photos/Logo/django.png";
import node from "./Photos/Logo/node.png";

function Home(){
    return(
<div>
  <Nav/>
  <img id="code"src={code}/>
  <img id="think"src={think}/>
  <img id="me"src={me}/>
  <div>
    <ul className="knowledge_of">
      <li>PYTHON
      </li>
      <li>
      
        REACT
      </li>
      <li>
      
        DJANGO
      </li>
      <li>
      
        NODE
      </li>
    </ul>
    <img id="python"src={python}/>
    <img id="reacttt"src={reacttt}/>
    <img id="django"src={django}/>
    <img id="node"src={node}/>
  </div>
  <Bio/>
  <Contacts/>


</div>
        
  );
}
export default Home;