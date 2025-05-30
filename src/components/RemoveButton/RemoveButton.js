import { useTheme } from '../../context/ThemeContext'
import styles from './RemoveButton.module.css'

const RemoveButton = ({onRemove}) => {
    const {isDark} = useTheme()
    return (
        <button onClick={onRemove} className={`${styles.removeBtn} ${isDark ? styles.dark : styles.light}`}> Remove </button>
    )
}
export default RemoveButton