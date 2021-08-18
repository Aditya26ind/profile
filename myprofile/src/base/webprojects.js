import Nav from "../components/navbar";
import React, { useEffect, useState } from "react";
import Getwebdata from "../datahelper/fetchDataweb";
import Card from "../components/card";
function Webdev(){
    const[value,setValue]=useState([]);
    const[err,setErr]=useState(false);
    const load =()=>{
        Getwebdata()
        .then((data)=>{
            if(data.error){
                setErr(data.err);
                console.log(err)
            }
            else{
                setValue(data);
            }
        });
    };
    useEffect(()=>{
         load();
    },[]);
    return (
        <div>
        <Nav/>
        <div className="row">
        {value.map((val,index)=>{
            return(
                <div key={index} className="col-lg-4 col-sm-12 col-md-6 mb-md-2"> 
                    <Card image={val.image}pro_name={val.project} description={val.description} link={val.link}/>

                </div>
            );
        })};
        </div>
        </div>

    );

}
export default Webdev;