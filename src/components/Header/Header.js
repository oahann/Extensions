import { useTheme } from '../../context/ThemeContext';
import styles from './Header.module.css'

const Header = ({ children}) => {
  const {isDark} = useTheme()
  return <h1 className={`${styles.header} ${isDark ? styles.dark : styles.light}`}>{children}</h1>;
};

export default Header;
