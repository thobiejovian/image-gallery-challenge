import React from 'react';
import "./Lightbox.scss";
import DATA from "../../response.json";

const Lightbox = ({hideLightBox, selectedImage, imageToShow}) => {
    return (
        <div id="lightbox">
            <div className="lightbox-gallery">
                <div className="title-wrapper">
                    <h2>{DATA.title}</h2>
                </div>
                <div className="lightbox-image-gallery">
                    <div className="close-button" onClick={hideLightBox}>
                        <i className="fas fa-times"></i>
                    </div>
                    <div className="lightbox-large-image-container">
                        <div className="lightbox-large-image-wrapper" >
                            <img src={`https://${imageToShow}_27.jpg`}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lightbox;