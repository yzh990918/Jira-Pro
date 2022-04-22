import { Table } from 'antd'
import type { Project, User } from '@/types'

interface ListProps {
  list: Project[]
  users: User[]
}

export const List = ({ list }: ListProps) => {
  return (
    <Table
      pagination={false}
      columns={[
        { title: '名称', dataIndex: 'name', key: 'name', sorter: (a, b) => a.name.localeCompare(b.name) },
        {
          title: '负责人Id',
          dataIndex: 'personId',
          key: 'personId',
        },
      ]}
      dataSource={list}
    ></Table>
  )
}
