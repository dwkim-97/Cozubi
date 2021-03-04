import React from "react";
import "./ShowTwitter.css";

class ShowTwitter extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        console.log("hihi");
        if (location.state === undefined) {
            history.push("/");
        }

        const script = document.createElement("script");

        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        script.charSet = "utf-8";

        document.body.appendChild(script);
    }
    render() {
        const { location } = this.props;
        if (location.state) {
            const url = "https://twitter.com/" + location.state.t_name + "?ref_src=twsrc%5Etfw"
            return (
                <div>
                    <a className="twitter-timeline" data-lang="en" data-width="100vw" data-height="100vh" data-theme="dark" href={url}></a>

                </div>
            )
        }
        else {
            return null;
        }
    }
}

export default ShowTwitter;