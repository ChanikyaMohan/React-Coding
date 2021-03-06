import React from "react";

import Header from  "./Header";
import Footer from  "./Footer";

export default class Layout extends React.Component{
    constructor(){
        super();
        this.state = {name:"Chandra Mohan"};
    }
    changeName(name){
        //console.log("inside changeName");
        this.setState({name});
    }
    render(){
        return (
            <div>
                <Header changeName = {this.changeName.bind(this)} name={this.state.name} />
                <Footer/>
            </div>
        );
    }
}