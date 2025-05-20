import React from 'react' // Обязательный импорт
import { Navigate, Route, Routes } from 'react-router-dom'
import CocktailPageWrapper from './pages/CoctailPageWrapper'
import NotFound from './pages/NotFound'
import { COCKTAIL_CODES } from './consts/index'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/margarita" replace />} />
      <Route
        path="/margarita"
        element={<CocktailPageWrapper code={COCKTAIL_CODES[0]} />}
      />
      <Route
        path="/mojito"
        element={<CocktailPageWrapper code={COCKTAIL_CODES[1]} />}
      />
      <Route
        path="/a1"
        element={<CocktailPageWrapper code={COCKTAIL_CODES[2]} />}
      />
      <Route
        path="/kir"
        element={<CocktailPageWrapper code={COCKTAIL_CODES[3]} />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
