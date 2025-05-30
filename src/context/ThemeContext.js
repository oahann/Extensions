import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext(undefined)

export const useTheme = () =>{
    const context = useContext(ThemeContext)

    if (!context){
        throw new Error ('Context error')
    }

    return context
}

export const ThemeProvider = ({children}) =>{
  const [isDark, setIsDark] = useState(false);
    
  return (
    <ThemeContext.Provider value={{isDark, setIsDark}}>
        {children}
    </ThemeContext.Provider>
  )
}