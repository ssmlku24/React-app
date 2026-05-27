function Header({ searchQuery, onSearch }) {
  return (
    <header className="header">
      <div className="header__brand">
        <h1 className="header__title">Movie Catalog</h1>
        <p className="header__subtitle">Каталог фільмів Studio Ghibli</p>
      </div>
      <label className="header__search-label">
        <span className="visually-hidden">Пошук фільмів</span>
        <input
          type="search"
          className="header__search"
          placeholder="Пошук за назвою, режисером..."
          value={searchQuery}
          onChange={(event) => onSearch(event.target.value)}
        />
      </label>
    </header>
  );
}

export default Header;
