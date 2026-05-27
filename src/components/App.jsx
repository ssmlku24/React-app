import { useEffect, useMemo, useState } from "react";
import { fetchMovies } from "../services/api.js";
import { createLocalMovieId, filterAndSortMovies } from "../utils/helpers.js";
import AddItemForm from "./AddItemForm.jsx";
import Filter from "./Filter.jsx";
import Header from "./Header.jsx";
import ItemList from "./ItemList.jsx";
import Section from "./Section.jsx";

function App() {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterValue, setFilterValue] = useState("all");
  const [sortValue, setSortValue] = useState("title-asc");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const loadMovies = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const movies = await fetchMovies(controller.signal);
        setItems(movies);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message || "Помилка завантаження");
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadMovies();

    return () => controller.abort();
  }, []);

  const visibleItems = useMemo(
    () => filterAndSortMovies(items, searchQuery, filterValue, sortValue),
    [items, searchQuery, filterValue, sortValue]
  );

  const handleAddItem = (newItem) => {
    const item = {
      ...newItem,
      id: createLocalMovieId(),
    };
    setItems((prev) => [item, ...prev]);
  };

  const handleDeleteItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="app">
      <Header searchQuery={searchQuery} onSearch={setSearchQuery} />

      <main className="app__main">
        <Section title="Фільтри та сортування">
          <Filter
            filterValue={filterValue}
            sortValue={sortValue}
            onFilterChange={setFilterValue}
            onSortChange={setSortValue}
          />
        </Section>

        <Section title="Додати фільм">
          <AddItemForm onAdd={handleAddItem} />
        </Section>

        <Section title="Каталог">
          {isLoading && <p className="status status--loading">Завантаження...</p>}
          {error && <p className="status status--error">Помилка: {error}</p>}
          {!isLoading && !error && visibleItems.length === 0 && (
            <p className="status status--empty">Нічого не знайдено</p>
          )}
          {!isLoading && !error && visibleItems.length > 0 && (
            <ItemList items={visibleItems} onDelete={handleDeleteItem} />
          )}
        </Section>
      </main>

      <footer className="app__footer">
        <p>Лабораторна робота 6 — React. Альона Чучупалова</p>
      </footer>
    </div>
  );
}

export default App;
