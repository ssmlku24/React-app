const API_URL = "https://ghibliapi.vercel.app/films";

function normalizeMovie(film) {
  return {
    id: film.id,
    title: film.title,
    image: film.image,
    description: film.description,
    rating: Number(film.rt_score) || 0,
    year: film.release_date || "",
    director: film.director || "",
  };
}

export async function fetchMovies(signal) {
  const response = await fetch(API_URL, { signal });

  if (!response.ok) {
    throw new Error("Не вдалося завантажити фільми");
  }

  const data = await response.json();
  return data.map(normalizeMovie);
}
