import { createContext } from "react/cjs/react.production.min";

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;


export default function CartStateProvider({ children }) {
    //This is a custom Provider
    //we store data (state) and functionality (updaters)
    //accessible anywhere in the app via consumer
    const cartOpen = true;
    return (
        <LocalStateProvider value={{ cartOpen }}>
            {children}
        </LocalStateProvider>
    );
};

export { CartStateProvider };