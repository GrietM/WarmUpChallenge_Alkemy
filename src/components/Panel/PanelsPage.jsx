import React, {useState, useEffect} from 'react'
import PanelsList from './PanelsList';
import {Space, message} from 'antd'
import axios from 'axios'

function PanelsPage () {
  
  const [elements, setElements] = useState([])

   console.log('elements :', elements)

  const getAllPosts = async () => {
    try{
        const resp = await axios.get ('https://jsonplaceholder.typicode.com/posts');
        setElements(resp.data)
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
      <div>
        {/* <Form changeList = {addNewProfile} /> */}
        <Space size="middle">
        <div className= "grilla">
        <PanelsList data = {elements} />
        </div>
        </Space>
      </div>
    </div>
  );
}

export default PanelsPage;


