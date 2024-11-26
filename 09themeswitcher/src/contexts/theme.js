import React, { useContext } from "react";

// this willbe different approach then the prvious one means means different way to wrute synatax
export const ThemeContext = React.createContext({
    themeMode:"light",
    darkTheme :() =>{},
    lightTheme : () =>{}
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}