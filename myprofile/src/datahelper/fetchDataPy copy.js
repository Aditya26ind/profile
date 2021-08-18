import React from "react";
function GetCertificatedata(){
    return fetch("/api/certificate/",{method:"GET"})
    .then((res)=>{
        return res.json();
    })
    .catch((err)=>{
        console.log(err);
    })
};
export default GetCertificatedata;