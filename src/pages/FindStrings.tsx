import React from 'react' // Обязательный импорт
import { JSX } from 'react'
import { Drink } from '../feautures/coctailSlice'

export const renderKeyStrings = (drink: Drink): JSX.Element => {
  const strMeasures: string[] = []
  const strIngredients: string[] = []

  Object.entries(drink).forEach(([key, value]) => {
    if (value && key.startsWith('strMeasure') && typeof value === 'string') {
      strMeasures.push(value)
    }
    if (value && key.startsWith('strIngredient') && typeof value === 'string') {
      strIngredients.push(value)
    }
  })

  return (
    <>
      {strMeasures.map((drink, index) => (
        <li key={index}>{drink}</li>
      ))}
      {strIngredients.map((drink, index) => (
        <li key={index}>{drink}</li>
      ))}
    </>
  )
}
