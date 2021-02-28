import React from "react";
import axios from "axios";
import Twitter from "twitter";
import CoinBox from "../components/CoinBox";
import './Home.css';


class Home extends React.Component{
    state = {
        isLoading: false,
    }

    getTwitter = async () => {
        const client = new Twitter({
            TWITTER_CONSUMER_KEY: "0ZquvNyZ4F88sVisX256LyHrm",
            TWITTER_CONSUMER_SECRET: "g2o2Xtf8bjExpTbG2R2jwwwFBJRInErCZWWQdYGt1e2WjZJ0Cc",
            TWIITER_ACCESS_TOKEN: "240048344-QE3wjuodlGo0s0AAC1gSTL3ZskDQrFEpinggAFnK",
            TWITTER_ACCESS_SECRET: "62p2DAs3joe2InS8HpzBhbq1sv6Yi6c2upGjEHUTgSjTu",
        })
        client.get('search/tweets', {q: 'node.js'}, function(error, tweets, response) {
            console.log(tweets);
        });

        this.setState({ isLoading: false })
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
        const {year, month, day} = this.getTime();
        const coins = ["ADA", "XEM", "XRP"]
        //this.getTwitter();
        return(
            <div className="Loading">
                {isLoading ?(
                    <header className="Loading-header">
                        <img src= "/images/loading3.png" className="Loading-img" alt="logo" />
                        <h1 className = "Loading-text">Cozubi</h1>
                        <p>Loading..</p>
                    </header>
                ) : (
                    <div>
                        <h1 className = "Show-Date">{year}/{month}/{day}</h1>
                        <section className = "Coin-List">
                            {coins.map(coin => (
                                <CoinBox
                                    key = {coin} name ={coin}/>
                            ))} 
                        </section>
                    </div>
                )}
            </div>
        )
    }
}

export default Home;