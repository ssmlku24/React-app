export function filterAndSortMovies(items, searchQuery, filterValue, sortValue) {
  let result = [...items];

  const query = searchQuery.trim().toLowerCase();
  if (query) {
    result = result.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.director.toLowerCase().includes(query)
    );
  }

  if (filterValue === "high") {
    result = result.filter((item) => item.rating >= 80);
  } else if (filterValue === "low") {
    result = result.filter((item) => item.rating < 80);
  }

  switch (sortValue) {
    case "rating-desc":
      result.sort((a, b) => b.rating - a.rating);
      break;
    case "rating-asc":
      result.sort((a, b) => a.rating - b.rating);
      break;
    case "year-desc":
      result.sort((a, b) => Number(b.year) - Number(a.year));
      break;
    case "year-asc":
      result.sort((a, b) => Number(a.year) - Number(b.year));
      break;
    case "title-asc":
      result.sort((a, b) => a.title.localeCompare(b.title, "uk"));
      break;
    default:
      break;
  }

  return result;
}

export function createLocalMovieId() {
  return `local-${Date.now()}`;
}
