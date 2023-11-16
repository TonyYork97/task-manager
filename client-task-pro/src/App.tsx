import './App.css'
import { Button, ConfigProvider, Layout } from 'antd';
import { BrowserRouter } from "react-router-dom";
import LeftSideBar from './components/leftSideBar/LeftSideBar';
const { Header, Content } = Layout;

function App() {

  return (
    <>
      <BrowserRouter>
        <ConfigProvider
          theme={{
            token: {
              // Seed Token
              colorPrimary: '#0077FF',
              // colorPrimary: '#F20000',
              borderRadius: 2,
              colorTextBase: '#333333'

              // Alias Token
              // colorBgContainer: '#FAFAFA',

            },

          }}
        >
          <Layout>

            <LeftSideBar />
            <Layout style={{ marginLeft: 256 }}>
              <Header
                style={{
                  background: '#fff'
                }}
              >
                <Button>Hello</Button>
              </Header>
              <Content style={{ margin: '0 16px', padding: 24, height: 'calc(100vh - 64px)' }}>
                <div>
                  <Button>Hello</Button>
                  <Button type="primary">Hello</Button>
                </div>
                <div>
                  <Button>Hello</Button>
                  <Button type="primary">Hello</Button>
                </div>
              </Content>
            </Layout>
          </Layout>
        </ConfigProvider>
      </BrowserRouter>
    </>
  )
}

export default App
