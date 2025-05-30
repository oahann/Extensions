import Logo from "../../assets/images/logo.js";
import ButtonThemeSwitcher from "../ButtonThemeSwitcher/ButtonThemeSwitcher.js";
import styles from './Navigation.module.css'
import { useTheme } from "../../context/ThemeContext.js";

const Navigation = () => {
  const {isDark} = useTheme()
  return (
    <div className={`${styles.wrapperNav} ${isDark ? styles.dark : styles.light}`}>
      <Logo isDark={isDark}/>
      <ButtonThemeSwitcher className={`${styles.btnThemeSwitcher} ${isDark ? styles.dark : styles.light}`}/>
    </div>
  );
};

export default Navigation;
