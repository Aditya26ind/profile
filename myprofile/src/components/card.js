import React from 'react';
import "./card.css"
function Card(props){ 
    return(
<div className="card ml-5 mt-5 ml-sm-5 bg-outline-primary"  id="card"style={{"width":"18rem" ,"height":"25rem"}}>
  <img style={{"height":"10rem"}}src={props.image} className="card-img-top py-2 px-2" alt="..."/>
  <div className="card-body">
    <h5 className="card-title col-12 text-info">{props.pro_name}</h5>
    <p className="card-text">{props.description}</p>
    <a href={props.link} className="btn btn-outline-primary col-12 ">SEE</a>
  </div>
</div>)
};
export default Card;