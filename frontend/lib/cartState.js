import { createContext, useContext, useState } from 'react';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;


export default function CartStateProvider({ children }) {
    //This is a custom Provider
    //we store data (state) and functionality (updaters)
    //accessible anywhere in the app via consumer

    //default to closed cart
    const [cartOpen, setCartOpen] = useState(false);

    function toggleCart() {
        //toggle to opposite value
        setCartOpen(!cartOpen);
    };

    function closeCart() {
        setCartOpen(false);
    };

    function openCart() {
        setCartOpen(true);
    };

    return (
        <LocalStateProvider value={{ cartOpen, setCartOpen }}>
            {children}
        </LocalStateProvider>
    );
};

// make a custom hook to access Cart local state

function useCart() {
    //useContext is the Consumer that can access Provider info
    const all = useContext(LocalStateContext);
    return all;
}

export { CartStateProvider, useCart };