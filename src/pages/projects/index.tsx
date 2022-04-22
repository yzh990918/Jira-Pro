import styled from '@emotion/styled'
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

  const Container = styled.div`
    padding: 3.2rem;
  `
  return (
    <Container>
      <h1 style={{ textAlign: 'left' }}>项目列表</h1>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </Container>
  )
}
