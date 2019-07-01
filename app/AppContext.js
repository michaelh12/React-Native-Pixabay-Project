import React, { useState, createContext } from 'react';



export const AppContext = createContext();

export const AppProvider = props => {

    const [images, setImages] = useState([
        {
            name: 'Harry Potter',
            price: '$10',
            id: 23124,
        },
        {
            name: 'Game of Thrones',
            price: '$10',
            id: 2566124,
        },
        {
            name: 'Inception',
            price: '$10',
            id: 23524,
        },
    ]);

    return (
        <AppContext.Provider value={[images, setImages]}>
            {props.children}
        </AppContext.Provider>
    );
};
