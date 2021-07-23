import './App.css';
import 'antd/dist/antd.css';
import MyLayout from './components/Layout/Layout';
import React/* , {useState} */ from 'react';
/* import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons'; */

function App() {

  //const [loading, setLoading] = useState(true)
  // const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  return (
    <div className="App">
      {/* loading ? <Spin indicator={antIcon} /> : <MyLayout/> */}
      <MyLayout/>
    </div>
  );
}

export default App;