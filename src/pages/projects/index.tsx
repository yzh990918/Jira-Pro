import { List } from './list'
import { SearchPanel } from './search-panel'
import { useDebounce, useMount } from '@/hooks'
import { cleanObject } from '@/utils'
import { useFetchWithToken } from '@/utils/useFetch'

export const ProjectListScreen = () => {
  const [users, setUsers] = useState([])

  const [param, setParam] = useState({
    name: '',
    personId: '',
  })

  const debouncedParam = useDebounce(param, 200)
  const [list, setList] = useState([])
  const client = useFetchWithToken()

  useEffect(() => {
    client('projects', { data: cleanObject(debouncedParam) }).then(setList)
  }, [debouncedParam])

  useMount(() => {
    client('users').then(setUsers)
  })

  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  )
}
