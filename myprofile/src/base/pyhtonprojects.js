import Nav from "../components/navbar";
import React  from "react";
import "./pythonprojects.css";
import { useEffect, useState } from "react";
import Getpydata from "../datahelper/fetchDataPy";
import Contacts from "../components/contact";
import Cardpy from "../components/cardForpy";
import Card from "../components/card";
function Py(){
    const[value,setValue]=useState([]);
    const[err,setErr]=useState(false);
    const load =()=>{
        Getpydata()
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
                    <Card pro_name={val.pro_name} description={val.description} image={val.image} link={val.link}/>
                </div>
            )
            }
            )}
        </div>
        </div>
        
    );

}
export default Py;