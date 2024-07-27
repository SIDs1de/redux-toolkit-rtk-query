import { useState } from 'react'
import { CreateRecipe } from './create-recipe/CreateRecipe'
import RecipeItem from './recipe-item/RecipeItem'
import { useGetRecipesQuery } from './store/api/api'
import User from './user/User'

// const userId = 1

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [queryTerm, setQueryTerm] = useState('')
  const { isLoading, data } = useGetRecipesQuery(queryTerm)

  const handleSearch = () => {
    setQueryTerm(searchTerm)
  }

  return (
    <>
      <CreateRecipe />

      <div>
        <input type='search' value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
      </div>

      {data?.map(recipe => (
        <RecipeItem key={recipe.id} recipe={recipe} />
      ))}
      {/* <User /> */}
    </>
  )
}

export default App
