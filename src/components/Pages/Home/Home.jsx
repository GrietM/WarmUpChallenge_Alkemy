import '../Home/Home.css';
import PanelsPage from '../../Panel/PanelsPage';
import { BackTop } from 'antd';

const Home = () => {
    
    return(
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
          <PanelsPage/>
          <BackTop />
      </div>
    
    )
}

export default Home