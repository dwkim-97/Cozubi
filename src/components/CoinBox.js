import React from "react";
import CoinImg from "../images/coins/XEM.png";
import "./CoinBox.css"

class CoinBox extends React.Component{
    render(){
        const name = this.props.name;
        return (
            <div className = "coin-box">
                <h1>{ name } </h1>
                <img className = "coin-img" src = {CoinImg} alt = {name} title = {name}/>
            </div>
        )
    }
}

export default CoinBox;