//import MyList from "../../List/List"
import '../Home/Home.css';
import PanelsPage from '../../Panel/PanelsPage';

const Home = () => {
    
    return(
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
           {/* <MyList/> */}
           <PanelsPage/>
      </div>
    
    )
}

export default Home