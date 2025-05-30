import { useTheme } from '../../context/ThemeContext';
import styles from './SwitchButtons.module.css'

const SwitchButtons = ({children, onClick}) => {
    const {isDark} = useTheme()
    return (
        <button className={`${styles.SwitchBth} ${isDark ? styles.dark : styles.light}`} onClick={onClick} >
            {children}
        </button>
    )
}
export default SwitchButtons;