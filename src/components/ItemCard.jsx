function ItemCard({ title, image, description, rating, year, director, onDelete }) {
  return (
    <article className="item-card">
      <img className="item-card__image" src={image} alt={title} loading="lazy" />
      <div className="item-card__body">
        <h3 className="item-card__title">{title}</h3>
        <p className="item-card__meta">
          {year && <span>{year}</span>}
          {director && <span> · {director}</span>}
        </p>
        <p className="item-card__rating">Рейтинг: {rating}%</p>
        <p className="item-card__description">{description}</p>
        <button type="button" className="item-card__delete" onClick={onDelete}>
          Видалити
        </button>
      </div>
    </article>
  );
}

export default ItemCard;
