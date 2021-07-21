import MyList from "../../List/List"
import '../Home/Home.css';

const Home = () => {
    
    return(
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
           <MyList/>
      </div>
    
    )
}

export default Home