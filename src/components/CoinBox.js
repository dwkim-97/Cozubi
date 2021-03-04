import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./CoinBox.css"

class CoinBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
        }
    }

    componentDidMount() {
        this.getTwitter(this.props.id);
    }

    getTwitter = (id) => {
        const name = this.props.name;
        this.getUserTweet(id)
            .then(data => {
                if (window.localStorage.getItem(`${name}needcheck`) === "false") {
                    console.log("alalalala")
                    if (this.checkNewTweet(data.data[0].id)) {
                        console.log(name + "difff!")
                        window.localStorage.setItem(name, data.data[0].id);
                        window.localStorage.setItem(`${name}needcheck`, "true");
                    }
                }
                this.setState({ isLoading: false })
            })
    }

    getUserTweet = async (id) => {
        const token = "AAAAAAAAAAAAAAAAAAAAAGjRNAEAAAAAAeRdOWSLZA7zaQ4EpEZnHBb2a%2Fo%3DjbRfxf2BahHuYn1CUp1fGAXjbyljDTuLonYTGK9F5JH71u0lgj";
        const endpointUrl = `/users/${id}/tweets?max_results=5`;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        const response = await axios.get(endpointUrl, config)
        console.log(response);
        return response.data;
    }

    checkNewTweet = (newId) => {
        if (window.localStorage.getItem(this.props.name) !== newId) {
            return true;
        }
        else {
            return false;
        }
    }

    render() {
        const name = this.props.name;
        const username = this.props.username;
        const id = this.props.id;
        const imgUrl = "/images/coins/" + name + ".png"
        return (
            <div className="coin-box">
                {this.state.isLoading ? (
                    <h1>Loading..</h1>
                ) : (
                        <Link to={{
                            pathname: `/${username}`,
                            state: {
                                username, name, id
                            }
                        }} style={{ "textDecoration": "none" }} >
                            <div>
                                {window.localStorage.getItem(`${name}needcheck`) === "true" ?
                                    (<img id="alert-img" src={"/images/alert4.png"} alt={"alert"} title={"alert"} />)
                                    : (null)
                                }
                                <h1 className="coin-name" >{name} </h1>
                                <img className="coin-img" src={imgUrl} alt={name} title={name} />
                            </div>
                        </Link>
                    )}

            </div>
        )
    }
}

export default CoinBox;