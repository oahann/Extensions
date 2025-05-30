import "./styles/reset.css";
import styles from "./App.module.css";
import Navigation from "./components/Navigation/Navigation";
import ManagementToolBar from "./components/ManagementTollBar/ManagementToolBar";
import CardsGrid from "./components/CardsGrid/CardsGrid";
import { useTheme } from "./context/ThemeContext";
import { useState } from "react";

const App = () => {
  const { isDark } = useTheme();
  const [filter, setFilter] = useState("All");
  return (
    <div
      className={`${styles.container} ${isDark ? styles.dark : styles.light}`}
    >
      <div>
        <Navigation />
      </div>
      <div>
        <ManagementToolBar filter={filter} setFilter={setFilter}/>
      </div>
      <div>
        <CardsGrid filter={filter}/>
      </div>
    </div>
  );
};

export default App;
