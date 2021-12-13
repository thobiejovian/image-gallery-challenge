import React from 'react';
import "./SmallImage.scss";

const SmallImage = ({imageCards}) => {
    return (
        <div className="small-image-container">
            {imageCards}
        </div>
    );
};

export default SmallImage;