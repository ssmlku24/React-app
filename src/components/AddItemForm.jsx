import { useState } from "react";

const initialFormState = {
  title: "",
  image: "",
  description: "",
  rating: "",
  year: "",
  director: "",
};

function AddItemForm({ onAdd }) {
  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const title = formData.title.trim();
    if (!title) return;

    onAdd({
      title,
      image:
        formData.image.trim() ||
        "https://via.placeholder.com/300x450?text=No+Poster",
      description: formData.description.trim() || "Опис відсутній",
      rating: Number(formData.rating) || 0,
      year: formData.year.trim(),
      director: formData.director.trim(),
    });

    setFormData(initialFormState);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3 className="add-form__title">Додати фільм</h3>

      <label className="add-form__field">
        Назва *
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </label>

      <label className="add-form__field">
        URL зображення
        <input
          type="url"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="https://..."
        />
      </label>

      <label className="add-form__field">
        Режисер
        <input
          type="text"
          name="director"
          value={formData.director}
          onChange={handleChange}
        />
      </label>

      <label className="add-form__field">
        Рік
        <input
          type="number"
          name="year"
          value={formData.year}
          onChange={handleChange}
          min="1900"
          max="2100"
        />
      </label>

      <label className="add-form__field">
        Рейтинг (0–100)
        <input
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          min="0"
          max="100"
        />
      </label>

      <label className="add-form__field add-form__field--full">
        Опис
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={3}
        />
      </label>

      <button type="submit" className="add-form__submit">
        Додати до каталогу
      </button>
    </form>
  );
}

export default AddItemForm;
