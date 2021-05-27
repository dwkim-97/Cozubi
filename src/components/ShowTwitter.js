import React, { useState } from "react";
import "./ShowTwitter.css"

function ShowTwitter(props) {
    const [modalOpen, setModalOpen] = useState(props.modalOpen);

    const addScript = () => {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        script.charSet = "utf-8"
        document.body.appendChild(script);
    }

    const url = "https://twitter.com/" + props.username + "?ref_src=twsrc%5Etfw";

    React.useEffect(() => {
        setModalOpen(props.modalOpen);
    }, [props.modalOpen])

    return (
        <div>
            {modalOpen ? (
                <div className="twitter-modal">
                    {window.localStorage.setItem(`${props.name}needcheck`, "false")}
                    <button className="close-button" onClick={props.modalClose}>X</button>
                    <a className="twitter-timeline" data-lang="en" data-width="100vw" data-height="70vh" data-theme="dark" href={url} ></a>
                    {addScript()}
                </div>
            ) : (
                null
            )}
        </div>
    )
}

export default ShowTwitter;