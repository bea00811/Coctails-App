import React from 'react' // Обязательный импорт
import { COCKTAIL_CODES } from '../consts'
import '../styles/navBar.scss'

export const NavBar = () => (
  <div className="navbar">
    <ul className="nav-links">
      {COCKTAIL_CODES.map((code) => {
        return (
          <li key={code}>
            <a href={`/${code}`}>{code}</a>
          </li>
        )
      })}
    </ul>
  </div>
)
