import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'

export default function User() {
  const { user, error, isLoading } = useTypedSelector(state => state.user)

  const { getUserById } = useActions()

  return (
    <>
      <button onClick={() => getUserById(1)}>Подгрузить</button>
      <h1 style={{ color: '#fff' }}>User: {user?.name}</h1>
    </>
  )
}
