import { FormEvent, useState } from 'react'
import { useCreateRecipeMutation } from '../store/api/recipe.api'
import { IRecipeData } from '../types/recipe.types'

const defaultValueRecipe: IRecipeData = {
  name: '',
  image: '',
}

export const CreateRecipe = () => {
  const [recipe, setRecipe] = useState(defaultValueRecipe)
  const [createRecipe] = useCreateRecipeMutation()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await createRecipe(recipe)
    setRecipe(defaultValueRecipe)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type='text'
          placeholder='Name'
          value={recipe.name}
          onChange={e => setRecipe({ ...recipe, name: e.target.value })}
        />
      </label>
      <label>
        <input
          type='text'
          placeholder='Image'
          value={recipe.image}
          onChange={e => setRecipe({ ...recipe, image: e.target.value })}
        />
      </label>
      <button type='submit'>Create</button>
    </form>
  )
}
