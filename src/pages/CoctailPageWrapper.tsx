import React from 'react' // Обязательный импорт
import CocktailPage from './CocktailPage'

const CocktailPageWrapper = ({ code }: { code: string }) => {
  return <CocktailPage code={code} />
}

export default CocktailPageWrapper
