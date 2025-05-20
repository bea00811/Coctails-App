import React from 'react' // Обязательный импорт
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCocktails } from '../feautures/coctailSlice'
import { RootState, AppDispatch } from '../store'
import { renderKeyStrings } from './FindStrings'
import { NavBar } from './NavBar'
import '../styles/index.scss'

type CocktailPageProps = {
  code: string
}

const CocktailPage = ({ code }: CocktailPageProps) => {
  const dispatch = useDispatch<AppDispatch>()
  const drinks = useSelector((state: RootState) => state.coctails.drinks)
  const status = useSelector((state: RootState) => state.coctails.status)
  const error = useSelector((state: RootState) => state.coctails.error)

  useEffect(() => {
    if (status === 'idle') {
      void dispatch(fetchCocktails(code))
    }
  }, [status, dispatch])

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>
  }

  return (
    <div className="cocktail-page">
      <NavBar />
      <div>
        <div className="cocktail-header">
          <h2>Коктейль: {code}</h2>
        </div>

        {drinks?.map((drink) => (
          <div className="cocktail-card" key={drink.idDrink}>
            <img
              className="cocktail-image"
              src={drink.strDrinkThumb || ''}
              alt={drink.strDrink || ''}
              loading="lazy"
            />

            <div className="cocktail-content">
              <h2 className="cocktail-title">{drink.strDrink}</h2>

              <div className="cocktail-meta">
                <p>{drink.strCategory}</p>
                <p>{drink.strAlcoholic}</p>
                <p>{drink.strGlass}</p>
              </div>

              <h3 className="section-title">Instructions:</h3>
              <p className="instructions">{drink.strInstructions}</p>

              <h3 className="section-title">List of ingredients:</h3>
              <ul className="ingredients-list">{renderKeyStrings(drink)}</ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CocktailPage
