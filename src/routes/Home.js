import React from "react";
import axios from "axios";
import CoinBox from "../components/CoinBox";
import './Home.css';


class Home extends React.Component {
    state = {
        isLoading: true,
    }

    // getTwitter = async (props) => {
    //     console.log(props)
    //     props.map(coin => {
    //         console.log(coin)
    //         this.getUserTweet(coin).then(() => {
    //             if (this.state.loaded.length === props.length) {
    //                 this.setState({ isLoading: false })
    //             }
    //         })
    //     })
    // }

    // getUserTweet = async (props) => {
    //     const token = "AAAAAAAAAAAAAAAAAAAAAGjRNAEAAAAAAeRdOWSLZA7zaQ4EpEZnHBb2a%2Fo%3DjbRfxf2BahHuYn1CUp1fGAXjbyljDTuLonYTGK9F5JH71u0lgj";
    //     const endpointUrl = `/users/${props.id}/tweets`;
    //     const config = {
    //         headers: {
    //             Authorization: `Bearer ${token}`
    //         }
    //     };
    //     const response = await axios.get(endpointUrl, config)
    //         .then((response) => {
    //             this.state.loaded.push(props.name);
    //             console.log(response);
    //         })
    // }

    getTime = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();
        let hour = date.getHours();
        let minute = date.getMinutes();
        if (hour < 10) {
            hour = "0" + hour;
        }
        if (minute < 10) {
            minute = "0" + minute;
        }

        return { year, month, day, hour, minute }
    }

    componentDidMount() {
        console.log("didmount");
        this.Loading();
    }

    Loading() {
        setTimeout(() => { this.setState({ isLoading: false }) }, 3000);
    }

    render() {
        const { isLoading } = this.state;
        const { year, month, day, hour, minute } = this.getTime();
        const coins = [
            {
                name: "XEM",
                id: "2313671966",
                t_name: "NEMofficial",
            },
            {
                name: "ADA",
                id: "4135644558",
                t_name: "CardanoStiftung",
            },
            {
                name: "XRP",
                id: "1051053836",
                t_name: "Ripple"
            },
            {
                name: "XLM",
                id: "2460502890",
                t_name: "StellarOrg",
            },
            {
                name: "LTC",
                id: "385562752",
                t_name: "litecoin",
            },
            {
                name: "DOT",
                id: "1595615893",
                t_name: "Polkadot"
            },
            {
                name: "IOST",
                id: "946758251902881792",
                t_name: "IOST_Official",
            }
        ]

        console.log("HOME!!")
        return (
            <main>
                {isLoading ? (
                    <header className="Loading-header">
                        <img src="images/loading4.png" className="Loading-img" alt="logo" />
                        <h1 className="Loading-text">COZUBI</h1>
                        <p>Loading..</p>
                    </header>
                ) : (
                        <div className="Main-Page">
                            <h1 className="Show-Date">{year}/{month}/{day} {hour}:{minute}</h1>
                            <section className="Coin-List" >
                                {coins.map(coin => (
                                    <CoinBox
                                        calssName="Coin-Box" key={coin.name} name={coin.name} id={coin.id} t_name={coin.t_name} />
                                ))}
                            </section>
                        </div>
                    )}
            </main>
        )
    }
}

export default Home;