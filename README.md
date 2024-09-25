# React + TypeScript + Vite + Tailwind


## Starting the project
https://tailwindcss.com/docs/guides/vite
```
npm create vite@latest my-project -- --template react
cd my-project
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

```tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

```index.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```
npm run dev
```

```App.jsx
export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}
```

## Routes
```
npm i -D react-router-dom
```
