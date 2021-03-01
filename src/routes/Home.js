import React from "react";
import axios from "axios";
import Twitter from "twitter";
import CoinBox from "../components/CoinBox";
import './Home.css';


class Home extends React.Component{
    state = {
        isLoading: false,
    }


    getTwitter = async() => {
        const needle = require('needle');
        const token = "AAAAAAAAAAAAAAAAAAAAAGjRNAEAAAAAa3tvEgstb%2BkhSfeu1kyqzODKHmc%3DEPZetvdsJjzu2pbrid80GiDol1CSaqc6fAeSbOtMJFXEOMIyzo";
        const endpointUrl = "https://api.twitter.com/2/tweets/search/recent";
        const params = {
            'query': 'from:twitterdev -is:retweet',
            'tweet.fields':'author-id',
        }
        const response = await needle('get', endpointUrl, params, {
            headers: {
                "User-Agent": "v2RecentSearchJS",
                "authorization": `Bearer ${token}`,
            }
        })
        if(response.body){
            console.log(response.body);
            return response.body;
        }else{
            throw new Error('Unsuccessful request');
        }
    }
    // getTwitter = async () => {
    //     const axios = require('axios');
    //     const client = new Twitter({
    //         TWITTER_API_KEY: "hoHg1DGawpy30gI9xXiQc2Whx",
    //         TWITTER_API_SECRET: "OcxmfUJJDfdMHhOZyyxPaIjmUEzX1f7dXLzQOTnhh40mG337g1",
    //         TWITTER_BEARER_TOKEN: "AAAAAAAAAAAAAAAAAAAAAGjRNAEAAAAAa3tvEgstb%2BkhSfeu1kyqzODKHmc%3DEPZetvdsJjzu2pbrid80GiDol1CSaqc6fAeSbOtMJFXEOMIyzo",
    //         TWIITER_ACCESS_TOKEN: "240048344-sfiRXc38T7PILeYyDYGmRelC3aUNbmC8G1P1zcjJ",
    //         TWITTER_ACCESS_SECRET: "VDs8l9UKrlFVTTSv5OhX98mD49jyuTnBJ9uqHj0CA9mez",
    //     })
    //     const response = await axios.get('https://api.twitter.com/2/tweets/search/recent?query=from:NEM')
    //     console.log(response);

    //     this.setState({ isLoading: false })
    // }

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
        const { isLoading } = this.state;
        const {year, month, day} = this.getTime();
        const coins = ["ADA", "XEM", "XRP", "XLM", "LTC", "DOT"]
        this.getTwitter();
        return(
            <div>
                {isLoading ?(
                    <header className="Loading-header">
                        <img src= "images/loading4.png" className="Loading-img" alt="logo" />
                        <h1 className = "Loading-text">COZUBI</h1>
                        <p>Loading..</p>
                    </header>
                ) : (
                    <div className = "Main-Page">
                        <h1 className = "Show-Date">{year}/{month}/{day}</h1>
                        <section className = "Coin-List" >
                            {coins.map(coin => (
                                <CoinBox
                                    calssName = "Coin-Box" key = {coin} name ={coin}/>
                            ))} 
                        </section>
                    </div>
                )}
            </div>
        )
    }
}

export default Home;