import ItemCard from "./ItemCard.jsx";

function ItemList({ items, onDelete }) {
  return (
    <ul className="item-list">
      {items.map((item) => (
        <li key={item.id} className="item-list__item">
          <ItemCard
            title={item.title}
            image={item.image}
            description={item.description}
            rating={item.rating}
            year={item.year}
            director={item.director}
            onDelete={() => onDelete(item.id)}
          />
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
