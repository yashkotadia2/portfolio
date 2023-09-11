import React, { createContext, useState } from 'react'

import { themeData } from '../data/themeData'

export const ThemeContext = createContext()

function ThemeContextProvider(props) {
    // eslint-disable-next-line
    const [theme, setTheme] = useState(themeData.theme.light)
    const [drawerOpen, setDrawerOpen] = useState(false)

    const setHandleDrawer = (isDarkMode) => {
        setDrawerOpen(!drawerOpen)

        if(isDarkMode){
            setTheme(themeData.theme.dark)
        }
        else{
            setTheme(themeData.theme.light)
        }
    }



    const value = { theme, drawerOpen, setHandleDrawer }
    return (
        <ThemeContext.Provider value={value}>
            {props.children}
        </ThemeContext.Provider>
    )
}


export default ThemeContextProvider