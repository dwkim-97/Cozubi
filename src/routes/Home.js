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
            TWITTER_API_KEY: "hoHg1DGawpy30gI9xXiQc2Whx",
            TWITTER_API_SECRET: "OcxmfUJJDfdMHhOZyyxPaIjmUEzX1f7dXLzQOTnhh40mG337g1",
            TWITTER_BEARER_TOKEN: "AAAAAAAAAAAAAAAAAAAAAGjRNAEAAAAAYKo3aCZ%2Fou2%2FDvJyoeSHnnioNQk%3Dkaq6IheHwGTQOSajTAOrxpx472niBInAkQGPJrDVv0EXjA67Hp",
            TWIITER_ACCESS_TOKEN: "240048344-sfiRXc38T7PILeYyDYGmRelC3aUNbmC8G1P1zcjJ",
            TWITTER_ACCESS_SECRET: "VDs8l9UKrlFVTTSv5OhX98mD49jyuTnBJ9uqHj0CA9mez",
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
                        <img src= "images/loading3.png" className="Loading-img" alt="logo" />
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