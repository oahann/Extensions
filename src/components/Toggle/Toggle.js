import { useTheme } from "../../context/ThemeContext";
import styles from "./Toggle.module.css";

const Toggle = ({ isActive, onToggle }) => {
  const {isDark} = useTheme()
  return (
    <label className={styles.toggleSwitch}>
      <input
        type="checkbox"
        checked={isActive}
        onChange={onToggle}
        className={styles.toggleInput}
      />
      <div
        className={`${styles.toggleSlider} ${
          isActive ? styles.active : styles.inactive
        }
        ${isDark ? styles.dark : styles.light} `}
      >
        <div
          className={`${styles.toggleCircle} ${
            isActive ? styles.active : styles.inactive
          }`}
        ></div>
      </div>
    </label>
  );
};

export default Toggle;
