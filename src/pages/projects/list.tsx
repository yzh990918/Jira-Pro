import type { Project, User } from '@/types'

interface ListProps {
  list: Project[]
  users: User[]
}

export const List = ({ list }: ListProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人Id</th>
        </tr>
      </thead>
      <tbody>
        {list.map(project => (
          <tr key={project.id}>
            <td>{project.name}</td>
            {/* undefined.name */}
            <td>{project.personId}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
