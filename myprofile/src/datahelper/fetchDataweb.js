import React from "react";
function Getwebdata(){
    return fetch("/api/webdatas/",{method:"GET"})
    .then((res)=>{
        return res.json();
    })
    .catch((err)=>{
        console.log(err);
    })
};
export default Getwebdata;