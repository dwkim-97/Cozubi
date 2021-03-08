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
        this.setState({ isLoading: false })
    }

    render() {
        const { isLoading } = this.state;
        const { year, month, day, hour, minute } = this.getTime();
        const coins = [
            {
                name: "XEM",
                id: "2313671966",
                username: "NEMofficial",
            },
            {
                name: "ADA",
                id: "4135644558",
                username: "CardanoStiftung",
            },
            {
                name: "XRP",
                id: "1051053836",
                username: "Ripple"
            },
            {
                name: "XLM",
                id: "2460502890",
                username: "StellarOrg",
            },
            {
                name: "LTC",
                id: "1656328279",
                username: "LTCFoundation",
            },
            {
                name: "DOT",
                id: "1595615893",
                username: "Polkadot"
            },
            {
                name: "IOST",
                id: "946758251902881792",
                username: "IOST_Official",
            },
            {
                id: "1289021417531404289",
                name: "DKA",
                username: "dKargo_Official"
            },
            {
                id: "20356963",
                name: "ENJ",
                username: "enjin"
            },
            {
                id: "739770876808167424",
                name: "POWR",
                username: "PowerLedger_io"
            },
            {
                id: "1150954258763698177",
                name: "META",
                username: "MetadiumG"
            },
            {
                id: "2590633042",
                name: "CHZ",
                username: "Chiliz"
            },
            {
                id: "1006952860272058368",
                name: "AERGO",
                username: "aergo_io"
            },
            {
                id: "877706077873111040",
                name: "MED",
                username: "_MediBloc"
            },
            {
                id: "913355281282633728",
                name: "PXL",
                username: "PlayCoin_PLY"
            },
            {
                id: "347831597",
                name: "SAND",
                username: "TheSandboxGame"
            },
            {
                id: "864347902029709314",
                name: "CRO",
                username: "cryptocom"
            },
            {
                id: "841424245938769920",
                name: "BAT",
                username: "AttentionToken"
            },
            {
                id: "2906318755",
                name: "SXP",
                username: "SwipeWallet"
            },
            {
                id: "897652496461680640",
                name: "WAXP",
                username: "WAX_io"
            },
            {
                id: "3291830170",
                name: "MANA",
                username: "decentraland"
            },
            {
                id: "968676894546608128",
                name: "MARO",
                username: "TTC_Blockchain"
            },
            {
                id: "2592325530",
                name: "GAS",
                username: "Neo_Blockchain"
            },
            {
                id: "910043982306041856",
                name: "NPXS",
                username: "PundiXLabs"
            },
            {
                id: "1027442266418241536",
                name: "PCI",
                username: "payprotocol"
            },
            {
                id: "1298171176343072769",
                name: "AQT",
                username: "Alphaquark_"
            },
            {
                id: "973106708158431232",
                name: "BORA",
                username: "bora_ecosystem"
            },
            {
                id: "1289063252966559744",
                name: "QTCON",
                username: "quiztokkr"
            },
            {
                id: "1162054281739898880",
                name: "HBAR",
                username: "hashgraph"
            },
            {
                id: "1010430329218371584",
                name: "ANKR",
                username: "ankr"
            },
            {
                id: "1032773383958745088",
                name: "KAVA",
                username: "kava_labs"
            },
            {
                id: "890365489658122242",
                name: "POLY",
                username: "PolymathNetwork"
            },
            {
                id: "1045586175853965312",
                name: "SSX",
                username: "somesinglovers"
            },
            {
                id: "970487711634046977",
                name: "TSHP",
                username: "TwelveShips12"
            },
            { id: "948119493040943104", name: "MOC", username: "TheMossland" },
            { id: "2896892108", name: "IQ", username: "Everipedia" },
            { id: "1115345843664629760", name: "STPT", username: "STP_Networks" },
            { id: "927717507309494272", name: "SBD", username: "SteemNetwork" },
            { id: "993728234003972096", name: "HUM", username: "Humanscape_io" },
            { id: "971573128861110272", name: "MVL", username: "mvlchain" },
            { id: "894231710065446912", name: "TRX", username: "Tronfoundation" },
            { id: "309464763", name: "LAMB", username: "Lambdaim" },
            { id: "918994376105197568", name: "TFUEL", username: "Theta_Network" },
            { id: "1042608549010894848", name: "UPP", username: "UPPSentinel" },
            { id: "3111739836", name: "MTL", username: "metalpaysme" },
            { id: "1398122942", name: "MFT", username: "HifiFinance" },
            { id: "2235729541", name: "DOGE", username: "dogecoin" },
            { id: "889691121000996864", name: "ICX", username: "helloiconworld" },
            { id: "893094469226053632", name: "TON", username: "Tokamak_Network" },
            { id: "980079455702953984", name: "CBK", username: "CobakOfficial" },
            { id: "1105397558761779200", name: "MBL", username: "moviebloc" },
            { id: "993001427873103873", name: "FCT2", username: "FirmaChain" },
            { id: "1530530365", name: "LINK", username: "chainlink" },
            { id: "1166548668083658752", name: "PLA", username: "playdapp_io" },
            { id: "36208197", name: "BTT", username: "BitTorrent" },
            { id: "755008292875894788", name: "EDR", username: "EndorSoftware" },
            { id: "979849926329978886", name: "SPND", username: "Spendchain" },
            { id: "965487043965931521", name: "CRE", username: "carryprotocol" },
            { id: "1250795698615758848", name: "JST", username: "DeFi_JUST" },
            { id: "774689518767181828", name: "SNT", username: "ethstatus" },
            { id: "745758443324080128", name: "XTZ", username: "tezos" },
            { id: "950110836042825728", name: "TT", username: "ThunderProtocol" },
            { id: "912949947397439488", name: "LOOM", username: "loomnetwork" },
            { id: "711030662728437760", name: "STEEM", username: "steemit" },
            { id: "922358568602365953", name: "ONT", username: "OntologyNetwork" },
            { id: "4711101020", name: "CVC", username: "civickey" },
            { id: "908576143975919616", name: "VET", username: "vechainofficial" },
            { id: "2366835468", name: "EMC2", username: "einsteiniumcoin" },
            { id: "831847934534746114", name: "OMG", username: "omgnetworkhq" },
            { id: "702852640816963584", name: "SRN", username: "SIRINLABS" },
            { id: "2425322684", name: "GRS", username: "GroestlcoinTeam" },
            { id: "826699259441328128", name: "ZRX", username: "0xProject" },
            { id: "345738416", name: "STORJ", username: "storjproject" },
            { id: "4053977488", name: "GLM", username: "golemproject" },
            { id: "900023164880789504", name: "SOLVE", username: "Solve_Care" },
            { id: "903565929719541760", name: "ELF", username: "aelfblockchain" },
            { id: "1237565114020175872", name: "HIVE", username: "hiveblocks" },
            { id: "873664699262418946", name: "RFR", username: "Refereum" },
            { id: "999282539066937344", name: "OBSR", username: "observerfounda1" },
            { id: "869908314292924416", name: "ADX", username: "AdEx_Network" },
            { id: "1057205263839588353", name: "AHT", username: "_aha_official" },
            { id: "4736263474", name: "LSK", username: "LiskHQ" },
            { id: "773009781644677120", name: "QTUM", username: "qtum" },
            { id: "918994376105197568", name: "THETA", username: "Theta_Network" },
            { id: "872984298973941764", name: "ZIL", username: "zilliqa" },
            { id: "3175291836", name: "STMX", username: "stormxio" },
            { id: "922358568602365953", name: "ONG", username: "OntologyNetwork" },
            { id: "774791455680434176", name: "ARK", username: "ArkEcosystem" },
            { id: "734688391942524928", name: "STRAX", username: "stratisplatform" },
            { id: "772745248363712512", name: "IGNIS", username: "IGNISguide" },
            { id: "1008730661560160256", name: "HUNT", username: "steemhunt" },
            { id: "1286548095027703808", name: "SRM", username: "ProjectSerum" },
            { id: "744075632997470208", name: "ARDR", username: "ArdorPlatform" },
            { id: "902168220400013312", name: "ORBS", username: "orbs_network" },
            { id: "882213472674742272", name: "DMT", username: "dmarket_com" },
            { id: "2863324024", name: "LBC", username: "LBRYcom" },
            { id: "973766864659734528", name: "QKC", username: "Quark_Chain" },
            { id: "3351041295", name: "SC", username: "SiaTechHQ" },
            { id: "769457743807844352", name: "KMD", username: "KomodoPlatform" },
            { id: "2895317462", name: "REP", username: "AugurProject" },
            { id: "3992601857", name: "IOTA", username: "iota" },
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
                        {/* <h1 className="Show-Date">{year}/{month}/{day} {hour}:{minute}</h1> */}
                        <div className="Title">
                            <img src={"images/loading4.png"} />
                            <h1>COZUBI</h1>
                        </div>

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