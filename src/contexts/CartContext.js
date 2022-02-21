import React, { createContext } from 'react';


export const CartContext = createContext();

export default function CartProvider(props){
    

    const [cart, setCart ] = useState([])
    const addItem = item => {
        setCart([...cart, item])
    }

    return(
        <CartContext.Provider value={{cart, addItem}}>
            {props.children}
        </CartContext.Provider>
    )
}