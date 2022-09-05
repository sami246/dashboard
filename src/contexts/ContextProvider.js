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
    //  Value in () is what initialised with
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined)
    const [currentColor, setCurrentColor] = useState('#03C9D7')
    const [currentMode, setCurrentMode] = useState('Light')
    const [themeSettings, setThemeSettings] = useState(false)

    const setMode = (e) => {
        // Change context API
        setCurrentMode(e.target.value);
        //  Update local storage so same color is activated next time
        localStorage.setItem('themeMode', e.target.value);
        setThemeSettings(false)
    }

    const setColor = (color) => {
        // Change context API
        setCurrentColor(color);
        //  Update local storage so same color is activated next time
        localStorage.setItem('colorMode', color);
        setThemeSettings(false)
    }

    const handleClick = (clicked) => {
        // Open up initial state object with ... and then only change key the was clicked to true
        setIsClicked({ ...initialState, [clicked]:true});
    }

    return (
    // Whatever is passed through as value will be passed through
    // all of the components inside the whole application
    <StateContext.Provider value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        setMode,
        setColor,
        currentMode,
        currentColor,
        themeSettings,
        setThemeSettings}}>
            {/* Have to pass through children, returning underlying
             component behind the context*/}
            {children}
    </StateContext.Provider>)   
}

// export context, using react method (useContext)
// and then specifying which context as multiple can be used
export const useStateContext = () => useContext(StateContext);