import MyPostForm from "../../Forms/PostForm"
import '../Home/Home.css';

const Home = () => {
    
    return(
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
           <MyPostForm/>
      </div>
    
    )
}

export default Home