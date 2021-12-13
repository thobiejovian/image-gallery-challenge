import React, {useState, useEffect} from 'react';
import axios from "axios";
import './App.scss';
import ImageGallery from "./ImageGallery/ImageGallery";

const App = () => {
    // This is the code to fetch the data from the URL but the issues when we fetch this
    // data from frontend(via axios or without axios), there is CORS Problem and Error 403(Server Rejects)

    // useEffect(() => {
    //     fetchData();
    // }, [])
    //
    // // Async await
    // const fetchData = async () => {
    //   const result = await axios.get("https://www.mobile.de/hiring-challenge.json");
    //   console.log(result);
    // }

    return (
        <div>
            <ImageGallery/>
        </div>
    );
};

export default App;