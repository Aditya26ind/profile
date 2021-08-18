import React from "react";
function Getpydata(){
    return fetch("/api/pythondata/",{method:"GET"})
    .then((res)=>{
        return res.json();
    })
    .catch((err)=>{
        console.log(err);
    })
};
export default Getpydata;