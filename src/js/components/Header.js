import React from "react";

import Title from "./Header/Title"

export default class Header extends React.Component{
    handleChange(e){
        //console.log("inside HandleChange");
        const name = e.target.value;
        this.props.changeName(name);
    }
    render(){
        //console.log(this.props);
        return (
            <div>
                <Title name={this.props.name}/>
                <input value={this.props.name} onChange={this.handleChange.bind(this)} />
            </div>
            );
    }
}