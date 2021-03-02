import React from "react";
import axios from "axios";
import CoinBox from "../components/CoinBox";
import './Home.css';


class Home extends React.Component {
    state = {
        isLoading: true,
    }

    constructor(props) {
        const coins = [
            {
                name: "NEM",
                id: "2313671966"
            },
            {
                name: "ADA",
                id: "4135644558"
            },
            {
                name: "XRP",
                id: "1051053836"
            },
            {
                name: "XLM",
                id: "2460502890"
            },
            {
                name: "LTC",
                id: "385562752"
            },
            {
                name: "DOT",
                id: "1595615893"
            }
        ]
    }


    getTwitter = async () => {
        const token = "AAAAAAAAAAAAAAAAAAAAAGjRNAEAAAAAAeRdOWSLZA7zaQ4EpEZnHBb2a%2Fo%3DjbRfxf2BahHuYn1CUp1fGAXjbyljDTuLonYTGK9F5JH71u0lgj";
        const endpointUrl = "/users/2313671966/tweets";
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        const response = await axios.get(endpointUrl, config)
        console.log(response);
        this.setState({ isLoading: false });
    }

    getTime = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();
        return { year, month, day }
    }

    componentDidMount() {

    }


    render() {
        const { isLoading } = this.state;
        const { year, month, day } = this.getTime();
        const coins = ["ADA", "XEM", "XRP", "XLM", "LTC", "DOT"]
        this.getTwitter();
        return (
            <div>
                {isLoading ? (
                    <header className="Loading-header">
                        <img src="images/loading4.png" className="Loading-img" alt="logo" />
                        <h1 className="Loading-text">COZUBI</h1>
                        <p>Loading..</p>
                    </header>
                ) : (
                        <div className="Main-Page">
                            <h1 className="Show-Date">{year}/{month}/{day}</h1>
                            <section className="Coin-List" >
                                {coins.map(coin => (
                                    <CoinBox
                                        calssName="Coin-Box" key={coin} name={coin} />
                                ))}
                            </section>
                        </div>
                    )}
            </div>
        )
    }
}

export default Home;