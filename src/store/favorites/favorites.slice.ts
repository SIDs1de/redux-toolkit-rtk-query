import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IRecipe } from '../../types/recipe.types'

const initialState: IRecipe[] = []

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorites: (state, { payload: recipe }: PayloadAction<IRecipe>) => {
      const isExists: boolean = state.some(r => r.id === recipe.id)
      if (isExists) return state.filter(r => r.id !== recipe.id)
      else state.push(recipe)
    },
  },
})

export const { actions, reducer } = favoritesSlice
