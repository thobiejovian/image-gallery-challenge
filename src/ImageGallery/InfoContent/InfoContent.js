import React from 'react';
import "./InfoContent.scss";
import DATA from "../../response.json";

const InfoContent = () => {
    return (
        <div className="landing-wrapper">
            <div className="left-content">
                <h2>{DATA.title}</h2>
            </div>
            <div className="right-content">
                <div className="price-wrapper">
                    <span className="price">{`${DATA.price.gross} (Brutto)`}</span>
                    <span>{`${DATA.price.net} (Netto) ${DATA.vat}`}</span>
                </div>
                <div className="finanzierung-button">
                    <span>Finanzierungsvergleich</span>
                </div>
                <a href="#">Finanzierung berechnen</a>
            </div>
        </div>
    );
};

export default InfoContent;