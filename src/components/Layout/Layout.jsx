import { Layout, Menu } from 'antd';
import  {NavLink,  Routes, Route} from 'react-router-dom';
import Home from '../Pages/Home/Home';
import NewPost from '../Pages/NewPost/NewPost'
import Error404 from '../Pages/Error404';
import {HomeOutlined, PlusOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

const MyLayout = () => {

    return (
  <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']} style={{fontWeight:'bolder'}}>
        <Menu.Item className="item" key="0" icon={<HomeOutlined/>}>
          <NavLink to="/"  style= {{fontWeight:'bolder'}}>
          Home
          </NavLink>          
        </Menu.Item>
        <Menu.Item className="item" key="1" icon = {<PlusOutlined />}> 
          <NavLink to="/NewPost"  style= {{fontWeight:'bolder'}}>
          New Post
          </NavLink>          
        </Menu.Item>
      </Menu>
    </Header>

    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
  {/*     <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>New Post</Breadcrumb.Item>
      </Breadcrumb> */}
      
      <div className="site-layout-content">
            <Routes>
                <Route exact path="/" element= {<Home/>} />      
                 <Route exact path="/NewPost" element= {<NewPost/>} />    
                 <Route exact path="*" element= {<Error404/>} /> 
            </Routes>
      </div>
    </Content>

    <Footer style={{ textAlign: 'center' }}> --- Created by <strong>Marcela Griet</strong>  ---  </Footer>
  </Layout>
    )
}

export default MyLayout