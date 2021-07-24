import MyPostForm from "../../Forms/PostForm"
import '../Home/Home.css';
import React, {useState} from 'react'

const NewPost = (props) => {
  
  const [elements, setElements] = useState([])

  const addNewElement = (elementsData) => {
    setElements([...elements,elementsData])
    console.log(elements)
    console.log(elementsData)
}

    return(
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
           <MyPostForm changeList = {addNewElement} elements={elements}/>
      </div>
    
    )
}

export default NewPost