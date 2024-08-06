import React from "react";
const About = () => {
    const [n,f]=React.useState(true);

    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h1 onClick={()=>f((v)=>!v)}>About Page</h1>
                <h2>Name :<span style={{color:n?"white":"red"}}>{n?"Ammar":"Null"}</span> </h2>
            </div>
        </>
    );
}

export default About;
