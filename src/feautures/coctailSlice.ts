import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

// Детально типизируем структуру коктейля (можно расширить по необходимости)
export type Drink = {
  idDrink: string
  strDrink: string
  strDrinkAlternate: string | null
  strTags: string | null
  strVideo: string | null
  strCategory: string | null
  strIBA: string | null
  strAlcoholic: string
  strGlass: string
  strInstructions: string | null
  [key: string]: string | null | undefined
}

type CocktailsState = {
  drinks: Drink[] | null
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

const initialState: CocktailsState = {
  drinks: null,
  status: 'idle',
  error: null
}

export const fetchCocktails = createAsyncThunk<Drink[] | null, string>(
  'cocktails/fetchCocktails',
  async (searchTerm): Promise<Drink[] | null> => {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
    )

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data: unknown = await response.json()

    // Проверяем структуру ответа
    if (typeof data === 'object' && data !== null && 'drinks' in data) {
      return data.drinks as Drink[] | null
    }

    throw new Error('Invalid API response format')
  }
)

const cocktailSlice = createSlice({
  name: 'cocktails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCocktails.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(
        fetchCocktails.fulfilled,
        (state, action: PayloadAction<Drink[] | null>) => {
          state.status = 'succeeded'
          state.drinks = action.payload
        }
      )
      .addCase(fetchCocktails.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || 'Failed to fetch cocktails'
      })
  }
})

export default cocktailSlice.reducer
