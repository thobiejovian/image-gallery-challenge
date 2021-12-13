import React from 'react';
import "./LargeImage.scss";

const LargeImage = ({imageToShow, showPrev, showNext, showImage}) => {
    return (
        <div className="large-image-container">
            <div className="button prev" onClick={showPrev}>
                <i className="fas fa-chevron-left"></i>
            </div>
            <div className="large-image-wrapper" onClick={() => showImage(imageToShow)}>
                <img src={`https://${imageToShow}_27.jpg`}></img>
            </div>
            <div className="button next" onClick={showNext}>
                <i className="fas fa-chevron-right"></i>
            </div>
        </div>
    );
};

export default LargeImage;