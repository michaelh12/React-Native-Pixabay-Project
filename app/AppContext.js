import React, { useState, createContext } from 'react';



export const AppContext = createContext();

export const AppProvider = props => {

    const [images, setImages] = useState({ imagesLoaded: false, images: {} });


    return (
        <AppContext.Provider value={[images, setImages]}>
            {props.children}
        </AppContext.Provider>
    );
};
