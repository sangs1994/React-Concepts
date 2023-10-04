import React, {Component} from "react";

class ClassProps extends Component{
    render(){
        return <h1>Welcome {this.props.name} {this.props.secondName}</h1>
    }
}

export default ClassProps