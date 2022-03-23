import React from "react";
import logo from "../../assets/images/logo.png";
import closeIcon from "../../assets/images/close_icon.png";

const Popup = props => {
    return (
        <div className="popup-box">
            <div className="box">
                <img src={logo} className="w-32" alt="Ciné Lounge" />
                <img src={closeIcon} className="close-icon" onClick={props.handleClose} alt="Fermer" />
                {props.content}
            </div>
        </div>
    );
};

export default Popup;