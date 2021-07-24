import React, {useState, useEffect} from 'react'
import PanelsList from './PanelsList';
import {message} from 'antd'
import axios from 'axios'

function PanelsPage () {
  
  const [elements, setElements] = useState([])
 
  console.log('elements :', elements)

  const getAllPosts = async () => {
    try{
        const resp = await axios.get ('https://jsonplaceholder.typicode.com/posts');
        setElements(resp.data)
        //setLoading(false)
    }
    catch (error) {
        message.error("Failed to create post. Clear your entries and check fields requirements shown in red")
    throw error
    }
}

useEffect(() =>{
  getAllPosts()
},[]
)


  return (
    <div>
      <div style={{border:'solid', borderColor:'gray', backgroundColor:'LightGray'}}>
          <h3 > Here is a list of the entries posted on this Blog </h3>
          <h4> Click on the titles to access the detailed content of each entry. Click on the buttons to edit or delete an element. </h4>
      </div>
      <br></br>
      <br></br>
      <PanelsList data = {elements} />
    </div>
  );
}

export default PanelsPage;


