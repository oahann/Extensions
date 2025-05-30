import styles from "./Card.module.css";
import RemoveButton from "../RemoveButton/RemoveButton";
import Toggle from '../Toggle/Toggle'
import { useTheme } from "../../context/ThemeContext";

const Card = ({item, onRemove, onToggle}) => {
  const {isDark} = useTheme()
  return (
    <div className={`${styles.wrapperCard} ${isDark ? styles.dark : styles.light}`}>
        <div className={styles.wrapperImgnDesc}>
      <div>
        <img src={item.logo} alt="logoExtensions"/>
      </div>
      <div className={styles.wrapperDesc}>
        <h2 className={`${styles.itemName} ${isDark ? styles.dark : styles.light}`}>{item.name}</h2>
        <p className={`${styles.description} ${isDark ? styles.dark : styles.light}`}>{item.description}</p>
      </div>
      </div>
      <div className={styles.wrapperBtn}>
        <RemoveButton onRemove={onRemove}/>
        <Toggle isActive={item.isActive} onToggle={onToggle} isDark={isDark}/>
      </div>
    </div>
  );
};

export default Card;
