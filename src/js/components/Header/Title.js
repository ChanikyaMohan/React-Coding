import React from "react";

export default class Title extends React.Component{
    render(){
        return (
            <h3>Welcome {this.props.name} </h3>
        );
    }
}