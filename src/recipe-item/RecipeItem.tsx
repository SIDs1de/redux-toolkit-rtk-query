import { useActions } from '../hooks/useActions'
import { useFavorites } from '../hooks/useFavorites'
import { IRecipe } from '../types/recipe.types'

interface IRecipeItem {
  recipe: IRecipe
}

export default function RecipeItem({ recipe }: IRecipeItem) {
  const { favorites } = useFavorites()

  const { toggleFavorites } = useActions()

  const isExists = favorites.some(r => r.id === recipe.id)

  return (
    <div>
      <img src={recipe.image} width={200} />
      {/* <img src="" alt="" /> */}
      <h2 style={{ color: '#fff' }}>{recipe.name}</h2>
      <button onClick={() => toggleFavorites(recipe)}>{isExists ? 'Remove from' : 'Add to'} favorites</button>
    </div>
  )
}
