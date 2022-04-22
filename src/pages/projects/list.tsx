import { Table } from 'antd'
import dayjs from 'dayjs'
import type { Project, User } from '@/types'
interface ListProps {
  list: Project[]
  users: User[]
}

export const List = ({ list }: ListProps) => {
  return (
    <Table
      rowKey="id"
      pagination={false}
      columns={[
        { title: '名称', dataIndex: 'name', key: 'name', sorter: (a, b) => a.name.localeCompare(b.name) },
        {
          title: '负责人Id',
          dataIndex: 'personId',
          key: 'personId',
        },
        {
          title: '创建时间',
          render(value, project) {
            return (
              <span>{
                project.created ? dayjs(project.created * 1000).format('YYYY-MM-DD HH:mm:ss') : '无'
              }</span>
            )
          },
        },
      ]}
      dataSource={list}
    ></Table>
  )
}
