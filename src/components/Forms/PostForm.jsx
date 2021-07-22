import { Form, Input, Button, message} from 'antd';
import React from 'react'
import axios from 'axios'

const { Item } = Form

const MyPostForm = () => {
    
    const onFinish = (newPost) => {
        console.log('Success:', newPost);
        savePost(newPost)
      };
    
      const onFinishFailed = (error) => {
        message.error("Failed to create post. Clear your entries and check fields requirements shown in red");
      };

    const savePost = async (newPost) => {
        try{
            await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
            console.log(" info sent to post endopint:", newPost)
        }
        catch (error) {
            message.error("Failed to create post. Clear your entries and check fields requirements shown in red")
        throw error
        }
    }

    const onReset = () => {
        document.getElementById("myform").reset();
    }

    
    return (
    <div>
       
     <Form
         id= "myform"
      /*   labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }} */
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
     >
            <Item label="Title" 
                name="title" 
                rules={[{ required: true, message: 'Insert title (max:20)' , max:20 }]}  
            >
            <Input/>
            </Item>
            <Item label="Content" 
                name="content" 
                rules={[{ required: true, message: 'Insert content'}]}   
            >
            <Input  />
            </Item>
            <Item >
                <Button type="primary" htmlType="submit"> Submit </Button>
                &nbsp;&nbsp;&nbsp;
                <Button htmlType="button" onClick={onReset} > Reset </Button>
            </Item>      
        </Form>
    </div>
   
)
}

export default MyPostForm;