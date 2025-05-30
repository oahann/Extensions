import IconMoon from '../../assets/images/icon-moon.svg'
import IconSun from '../../assets/images/icon-sun.svg'
import { useTheme } from '../../context/ThemeContext'

const ButtonThemeSwitcher = ({className}) =>{
  const {isDark, setIsDark} =  useTheme()
   return (
     <button className={className} onClick={() => setIsDark(!isDark)}> <img src = {isDark ? IconSun : IconMoon} alt = 'ThemeSwitcher'/> </button>
   )
}

export default ButtonThemeSwitcher;