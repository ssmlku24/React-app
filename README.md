# Movie Catalog

Лабораторна робота 6 — React: інтерактивний застосунок (каталог фільмів).

## Можливості

- Завантаження фільмів з [Studio Ghibli API](https://ghibliapi.vercel.app/) при відкритті
- Пошук за назвою, описом, режисером
- Фільтр за рейтингом та сортування
- Додавання власного фільму через форму
- Видалення з каталогу
- `useState`, `useEffect` з `AbortController`, умовний рендеринг

## Структура

```
src/
├── components/
│   ├── App.jsx
│   ├── Header.jsx
│   ├── ItemList.jsx
│   ├── ItemCard.jsx
│   ├── AddItemForm.jsx
│   ├── Filter.jsx
│   └── Section.jsx
├── services/
│   └── api.js
├── utils/
│   └── helpers.js
├── main.jsx
└── index.css
```

## Запуск

```bash
npm install
npm run dev
```

Відкрийте адресу з термінала (зазвичай http://localhost:5173).

## Збірка

```bash
npm run build
```

## Технології

- React 19 + Vite
- Fetch API, ES Modules
- Функціональні компоненти та хуки

## Автор

Альона Чучупалова
