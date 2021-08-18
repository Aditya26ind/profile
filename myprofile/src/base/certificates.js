import Nav from "../components/navbar";
import React, { useEffect, useState } from "react";
import GetCertificatedata from "../datahelper/fetchDatacertificate";
import Card from "../components/card";
function Certificate(){
    const[value,setValue]=useState([]);
    const[err,setErr]=useState(false);
    const load =()=>{
        GetCertificatedata()
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
                    <Card pro_name={val.name} link={val.link} image={val.image}/>
                </div>
            )
            }
            )}
        </div>
        </div>
        
    );

}
export default Certificate;