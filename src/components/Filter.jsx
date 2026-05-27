function Filter({ filterValue, sortValue, onFilterChange, onSortChange }) {
  return (
    <div className="filter">
      <label className="filter__field">
        <span className="filter__label">Рейтинг</span>
        <select
          className="filter__select"
          value={filterValue}
          onChange={(event) => onFilterChange(event.target.value)}
        >
          <option value="all">Усі</option>
          <option value="high">Високий (80+)</option>
          <option value="low">Нижчий (&lt; 80)</option>
        </select>
      </label>

      <label className="filter__field">
        <span className="filter__label">Сортування</span>
        <select
          className="filter__select"
          value={sortValue}
          onChange={(event) => onSortChange(event.target.value)}
        >
          <option value="title-asc">За назвою (А–Я)</option>
          <option value="rating-desc">За рейтингом (↓)</option>
          <option value="rating-asc">За рейтингом (↑)</option>
          <option value="year-desc">За роком (новіші)</option>
          <option value="year-asc">За роком (старіші)</option>
        </select>
      </label>
    </div>
  );
}

export default Filter;
