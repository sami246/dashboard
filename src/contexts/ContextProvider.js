import React, { createContext, useContext, useState} from 'react';

const StateContext = createContext();

const initialState = {
    // All the drop down things in navbar start off as false
    chat: false,
    cart: false,
    userProfile: false,
    notifcation: false
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);

    return (
    // Whatever is passed through as value will be passed through
    // all of the components inside the whole application
    <StateContext.Provider value={{activeMenu, setActiveMenu}}>
            {/* Have to pass through children, returning underlying
             component behind the context*/}
            {children}
    </StateContext.Provider>)   
}

// export context, using react method (useContext)
// and then specifying which context as multiple can be used
export const useStateContext = () => useContext(StateContext);