import React from "react";
import LodingImg from '../images/loading3.png';
import './Home.css';


class Home extends React.Component{
    state = {
        isLoading: false,
    }

    getTime = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();
        return {year, month, day}
    }

    componentDidMount(){
    
    }
    

    render() {
        const { isLoading, movies } = this.state;
        const coins = ["XEM, ADA, XRP"];
        const {year, month, day} = this.getTime();
        return(
            <div className="Loading">
                {isLoading ?(
                    <header className="Loading-header">
                        <img src={LodingImg} className="Loading-img" alt="logo" />
                        <h1 className = "Loading-text">Loading..</h1>
                    </header>
                ) : (
                    <div className = "CoinList">
                        <h1>{year}/{month}/{day}</h1>
                    </div>
                )}
            </div>
        )
    }
}

export default Home;