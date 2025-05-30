import styles from "./ManagementToolBar.module.css";
import Header from "../Header/Header";
import SwitchButtons from "../SwitchButtons/SwitchButtons";

const ManagementToolBar = ({ filter, setFilter }) => {
  const buttons = [
    { label: "All", value: "All" },
    { label: "Active", value: "Active" },
    { label: "Inactive", value: "Inactive" },
  ];

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  return (
    <div className={styles.wrapperToolBar}>
      <Header>Extensions List</Header>
      <div className={styles.wrapperBtn}>
        {buttons.map((btn) => (
          <SwitchButtons
            key={btn.value}
            onClick={() => handleFilterChange(btn.value)}
          >
            {btn.label}
          </SwitchButtons>
        ))}
      </div>
    </div>
  );
};

export default ManagementToolBar;
