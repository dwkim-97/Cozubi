import React from "react";
import axios from "axios";
import "./CoinBox.css"

class CoinBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
        }
    }

    componentDidUpdate() {
    }

    getTwitter = async (id) => {
        console.log(`start gt ${this.props.name}`)
        await this.getUserTweet(id)
            .then(data => {
                console.log(data.data)
                this.setState({ isLoading: false, data: data.data })
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
        console.log(`end gut ${this.props.name}`)
        return response.data;
    }

    render() {
        const name = this.props.name;
        const id = this.props.id;
        const imgUrl = "/images/coins/" + name + ".png"
        console.log(`coin render ${name}`)
        if (!this.state.data) {
            this.getTwitter(id);
        }
        return (
            <div className="coin-box">
                {this.state.isLoading ? (
                    <h1>Loading..</h1>
                ) : (
                        <div>
                            <img id="alert-img" src={"/images/alert.png"} alt={"alert"} title={"alert"} />
                            <h1 className="coin-name" >{name} </h1>
                            <img className="coin-img" src={imgUrl} alt={name} title={name} />
                        </div>
                    )}

            </div>
        )
    }
}

export default CoinBox;