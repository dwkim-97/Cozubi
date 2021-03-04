import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./CoinBox.css"

class CoinBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            alreadyGet: false,
        }
    }

    componentDidUpdate() {
    }

    getTwitter = async (id) => {
        await this.getUserTweet(id)
            .then(data => {
                if (!this.state.alreadyGet) {
                    if (this.checkNewTweet(data.data[0].id)) {
                        window.localStorage.setItem(this.props.name, data.data[0].id);
                        this.setState({ isLoading: false, isNewTweet: true, alreadyGet: true, data: data.data })
                    }
                    else {
                        this.setState({ isLoading: false, isNewTweet: false, alreadyGet: true, data: data.data })
                    }
                }
            })
    }

    getUserTweet = async (id) => {
        const token = "AAAAAAAAAAAAAAAAAAAAAGjRNAEAAAAAAeRdOWSLZA7zaQ4EpEZnHBb2a%2Fo%3DjbRfxf2BahHuYn1CUp1fGAXjbyljDTuLonYTGK9F5JH71u0lgj";
        const endpointUrl = `/users/${id}/tweets`;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        const response = await axios.get(endpointUrl, config)
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
        const t_name = this.props.t_name;
        const id = this.props.id;
        const imgUrl = "/images/coins/" + name + ".png"
        if (!this.state.data) {
            this.getTwitter(id);
        }
        return (
            <div className="coin-box">
                {this.state.isLoading ? (
                    <h1>Loading..</h1>
                ) : (
                        <Link to={{
                            pathname: `/${t_name}`,
                            state: {
                                t_name, name, id
                            }
                        }}>
                            <div>
                                {this.state.isNewTweet ?
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