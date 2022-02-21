import React, { createContext, useState } from 'react'
import data from '../data';

export const ProductContext = createContext();

export default function ProductProvider(props){


    const [products] = useState(data);


    return(
        <ProductContext.Provider value={products}>
            {props.children}
        </ProductContext.Provider>
    )
}