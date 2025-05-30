import styles from './CardsGrid.module.css'
import { useState } from "react";
import data from "../../data.json";
import Card from "../Card/Card";

const CardsGrid = ({filter}) => {
  const [cards, setCards] = useState(data);

  const handleRemove = (index) => {
    setCards((prevCards) => prevCards.filter((_, i) => i !== index));
  };

  const handleToggle = (index) => {
    setCards((prevCards) =>
      prevCards.map((card, i) =>
        i === index ? { ...card, isActive: !card.isActive } : card
      )
    );
  };

  const filteredCards = cards.filter((item) =>
    filter === "All" ? true :
    filter === "Active" ? item.isActive :
    filter === "Inactive" ? !item.isActive :
    false
  );

  return (
    <div className={styles.wrapperGridCards}>
      {filteredCards.map((item, index) => (
        <Card
          key={`${item.name}-${index}`}
          item={item}
          onRemove={() => handleRemove(index)}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default CardsGrid;
