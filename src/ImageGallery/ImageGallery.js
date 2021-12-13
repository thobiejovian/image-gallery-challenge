import React, {useState} from 'react';
import LargeImage from "./LargeImage/LargeImage";
import InfoContent from "./InfoContent/InfoContent";
import Lightbox from "./Lightbox/Lightbox";
import "./ImageGallery.scss";
import DATA from "../response.json";
import SmallImage from "./SmallImage/SmallImage";

const ImageGallery = () => {

    //remove duplicate image
    const imageURL = DATA.images.map(url => url.uri)
    const filteredURL = [...new Set(imageURL)];

    //first image for large image slider
    const firstImage = DATA.images[0].uri;


    //Hooks
    const [imageToShow, setImageToShow] = useState(firstImage);
    const [lightboxDisplay, setLightBoxDisplay] = useState(false);
    const [imageListIndex, setImageListIndex] = useState({
        selected: 0
    });

    //image length for image-counter
    const imageLength = filteredURL.map(url => url).length
    const selectedImage = imageListIndex.selected;

    //looping through our images array to create img elements

    //function to show a specific image in the lightbox, amd make lightbox visible
    const showImage = (image) => {
        setImageToShow(image);
        setLightBoxDisplay(true);
    };

    //hide lightbox
    const hideLightBox = () => {
        setLightBoxDisplay(false);
    };

    //show next image in lightbox
    const showNext = (e) => {
        e.stopPropagation();
        let currentIndex = filteredURL.indexOf(imageToShow);
        if (currentIndex >= filteredURL.length - 1) {
            setLightBoxDisplay(false);
        } else {
            let nextImage = filteredURL[currentIndex + 1];
            setImageToShow(nextImage);
            setImageListIndex({
                selected: selectedImage + 1
            });
        }
    };

    //show previous image in lightbox
    const showPrev = (e) => {
        e.stopPropagation();
        let currentIndex = filteredURL.indexOf(imageToShow);
        if (currentIndex <= 0) {
            setLightBoxDisplay(false);
        } else {
            let nextImage = filteredURL[currentIndex - 1];
            setImageToShow(nextImage);
            setImageListIndex({
                selected: selectedImage - 1
            });
        }
    };
    const imageCards = filteredURL.map((image, index) => (
        <div className="small-image-wrapper" key={index} style={{border: image === imageToShow ? "3px solid orange" : ""}} onClick={() => showImage(image)}>
            <div className="icon-wrapper">
                <i className="fas fa-search-plus"></i>
            </div>
            <img
                className="image-card"
                src={`https://${image}_2.jpg`}
            />
        </div>
    ));

    return (
        <div className="section-container">
            <InfoContent/>
            <div className="image-gallery">
                <SmallImage
                    imageCards={imageCards}
                />
                <LargeImage
                    selectedImage = {selectedImage}
                    imageLength = {imageLength}
                    imageToShow = {imageToShow}
                    showPrev = {(e) => showPrev(e)}
                    showNext = {(e) => showNext(e)}
                    showImage={(image) => showImage(image)}
                />
            </div>
            {
                lightboxDisplay ?
                    <Lightbox
                        hideLightBox = {() => hideLightBox()}
                        selectedImage = {selectedImage}
                        imageLength = {imageLength}
                        imageToShow = {imageToShow}
                        imageCards={imageCards}
                        showPrev = {(e) => showPrev(e)}
                        showNext = {(e) => showNext(e)}
                    />
                    : ""
            }
        </div>
    );
};

export default ImageGallery;