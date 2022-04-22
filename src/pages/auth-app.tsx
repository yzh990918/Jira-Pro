import styled from '@emotion/styled'
import { Dropdown, Menu } from 'antd'
import { useAuth } from '@/hooks'
import { ProjectListScreen } from '@/pages/projects'
import { Row } from '@/components/lib'
import SoftwareLogo from '@/assets/software-logo.svg'

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
  height: 100vh;
`

// grid-area 用来给grid子元素起名字
const Header = styled(Row)`
  padding: 3.2rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
`

const SoftwareLogoComponent = styled.img`
  width: 18rem;
  color:rgb(38, 132, 255);
`
const HeaderLeft = styled(Row)``
const HeaderRight = styled.div``
const Main = styled.main``

export const AuthApp = () => {
  const { logout, user } = useAuth()
  return (
    <Container>
      <Header between={true}>
        <HeaderLeft gap={ true} >
          <SoftwareLogoComponent src={SoftwareLogo} />
          <h2>项目</h2>
          <h2>用户</h2>
        </HeaderLeft>
        <HeaderRight>
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item key={'logout'}>
                  <a onClick={logout}>登出</a>
                </Menu.Item>
              </Menu>
            }
          >
            <a onClick={e => e.preventDefault()}>Hi, {user?.name}</a>
          </Dropdown>
        </HeaderRight>
      </Header>
      <Main>
        <ProjectListScreen />
      </Main>
    </Container>
  )
}
