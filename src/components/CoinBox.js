import React from "react";
import axios from "axios";
import "./CoinBox.css"

class CoinBox extends React.Component{
    render(){
        const name = this.props.name;
        const imgUrl = "/images/coins/"+name+".png"
        return (
            <div className = "coin-box">
                <h1>{ name } </h1>
                <img className = "coin-img" src = {imgUrl}  alt = {name} title = {name}/>
            </div>
        )
    }
}

export default CoinBox;