import React from "react";
import CoinBox from "../components/CoinBox";
import './Home.css';


class Home extends React.Component {
    state = {
        isLoading: false,
    }

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
        //this.Loading();
        // setTimeout(() => { window.location.reload(); }, 10000);
    }

    // componentDidUpdate() {
    //     //this.Loading();
    //     this.setState({ isLoading: false })
    // }

    render() {
        const { isLoading } = this.state;
        const { year, month, day, hour, minute } = this.getTime();
        const coins = [
            {
                name: "XEM",
                id: "2313671966",
                username: "NEMofficial",
            },
            // {
            //     name: "ADA",
            //     id: "4135644558",
            //     username: "CardanoStiftung",
            // },
            // {
            //     name: "XRP",
            //     id: "1051053836",
            //     username: "Ripple"
            // },
            // {
            //     name: "XLM",
            //     id: "2460502890",
            //     username: "StellarOrg",
            // },
            // {
            //     name: "LTC",
            //     id: "385562752",
            //     username: "litecoin",
            // },
            // {
            //     name: "DOT",
            //     id: "1595615893",
            //     username: "Polkadot"
            // },
            // {
            //     name: "IOST",
            //     id: "946758251902881792",
            //     username: "IOST_Official",
            // },
            // {
            //     id: "1289021417531404289",
            //     name: "DKA",
            //     username: "dKargo_Official"
            // },
            // {
            //     id: "20356963",
            //     name: "ENJ",
            //     username: "enjin"
            // },
            // {
            //     id: "739770876808167424",
            //     name: "POWR",
            //     username: "PowerLedger_io"
            // },
            // {
            //     id: "1150954258763698177",
            //     name: "META",
            //     username: "MetadiumG"
            // },
            // {
            //     id: "2590633042",
            //     name: "CHZ",
            //     username: "Chiliz"
            // },
            // {
            //     id: "1006952860272058368",
            //     name: "AERGO",
            //     username: "aergo_io"
            // },
            // {
            //     id: "877706077873111040",
            //     name: "MED",
            //     username: "_MediBloc"
            // },
            // {
            //     id: "913355281282633728",
            //     name: "PXL",
            //     username: "PlayCoin_PLY"
            // },
            // {
            //     id: "347831597",
            //     name: "SAND",
            //     username: "TheSandboxGame"
            // },
            // {
            //     id: "864347902029709314",
            //     name: "CRO",
            //     username: "cryptocom"
            // },
            // {
            //     id: "841424245938769920",
            //     name: "BAT",
            //     username: "AttentionToken"
            // },
            // {
            //     id: "2906318755",
            //     name: "SXP",
            //     username: "SwipeWallet"
            // },
            // {
            //     id: "897652496461680640",
            //     name: "WAXP",
            //     username: "WAX_io"
            // },
            // {
            //     id: "3291830170",
            //     name: "MANA",
            //     username: "decentraland"
            // },
            // {
            //     id: "968676894546608128",
            //     name: "MARO",
            //     username: "TTC_Blockchain"
            // },
            // {
            //     id: "2592325530",
            //     name: "GAS",
            //     username: "Neo_Blockchain"
            // },
            // {
            //     id: "910043982306041856",
            //     name: "NPXS",
            //     username: "PundiXLabs"
            // },
            // {
            //     id: "1027442266418241536",
            //     name: "PCI",
            //     username: "payprotocol"
            // },
            // {
            //     id: "1298171176343072769",
            //     name: "AQT",
            //     username: "Alphaquark_"
            // },
            // {
            //     id: "973106708158431232",
            //     name: "BORA",
            //     username: "bora_ecosystem"
            // },
            // {
            //     id: "240048344",
            //     name: "me",
            //     username: "Kdw97mode",
            // }
        ]
        console.log("home rendering")
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
                                        calssName="Coin-Box" key={coin.name} name={coin.name} id={coin.id} username={coin.username} />
                                ))}
                            </section>
                        </div>
                    )}
            </main>
        )
    }
}

export default Home;