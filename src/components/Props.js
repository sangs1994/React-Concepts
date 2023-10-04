import React from "react";

const Props_Component = (props) =>{
    console.log(props);
    return <h1>Hello {props.name} {props.secondname}</h1>
}

export default Props_Component