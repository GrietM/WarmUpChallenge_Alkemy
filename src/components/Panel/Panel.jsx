import { Collapse, message } from 'antd';
import React, { useState } from 'react';
import { Modal} from 'antd';
import axios from 'axios'
import {EditOutlined,DeleteOutlined} from '@ant-design/icons';
import MyEditForm from '../Forms/EditForm';

const { Panel } = Collapse;

const MyPanel = (props) => {
 const element = props.element

 const [isModalVisible, setIsModalVisible] = useState(false);
 const [isEditModalVisible, setIsEditModalVisible] = useState(false);
 
 const showModal = () => {
   setIsModalVisible(true);
 };

 const showEditModal = () => {
  setIsEditModalVisible(true);
};

const handleOnDelete = async () => {
  try{
    const resp = await axios.delete('https://jsonplaceholder.typicode.com/posts/'+ element.id);
    message.success(`Post N° ${element.id} succesfully deleted`)
    console.log("delete successfully executed at:", resp.config.url)
    setIsModalVisible(false)
  } 
  catch (error){
    message.error('Error at Operation Deletion: ' + error)
    throw error
  }
} 

 const handleEditOk = () => {
  setIsEditModalVisible(false);
};

 const handleCancel = () => {
   setIsModalVisible(false);
 };
 
 const handleEditCancel = () => {
  setIsEditModalVisible(false);
};

  const genExtra = () => (
  <EditOutlined style={{fontSize:'18px'}}
      onClick={event => {
      event.stopPropagation();
      showEditModal()
      }}
  />
)

const genExtra2 = () => (
  <DeleteOutlined style={{fontSize:'18px', color:'red'}}
      onClick={event => {
      event.stopPropagation();
      showModal()
    }}
  />
)

const extraArray = [genExtra(),genExtra2()]

return (
  <>
  <Collapse accordion>
    <Panel 
        header= {element.title} 
        key="1" 
        extra = {extraArray}
    >
      <p>{element.body}</p>
    </Panel>
  </Collapse>
  <Modal 
    title="Delete Modal" 
    visible={isModalVisible}
    onOk={handleOnDelete}
    onCancel={handleCancel}
  >
      <p> Please confirm if you want to delete the N° {element.id} post with the following title: </p>
      <br></br>
      <h3 > {element.title} </h3>
  </Modal>

  <Modal 
    title="Edit Modal" 
    visible={isEditModalVisible}
    onOk={handleEditOk} 
    onCancel={handleEditCancel}>
      <MyEditForm element = {element}/>
  </Modal>
  </>
)
}


export default MyPanel