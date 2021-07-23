import { Form, Input, Button, message} from 'antd';
import React, {useEffect} from 'react'
import axios from 'axios'

const { Item } = Form

const MyEditForm = (props) => {

    const element = props.element
    const [formedit] = Form.useForm()

    console.log('element en editForm:', element)
    
    const onFinish = (editedPost) => {
        console.log('Success. Info sent to put endpoint:', editedPost);
        saveEditedPost(editedPost)
      };
    
      const onFinishFailed = (error) => {
        message.error("Failed to edit post. Clear your entries and check fields requirements shown in red");
      };

    const saveEditedPost = async (editedPost) => {
        try{
            const resp = await axios.put('https://jsonplaceholder.typicode.com/posts/'+ element.id, editedPost);
            console.log(" Response from put endopint:", resp.data)
            message.success(`Post N° ${resp.data.id} succesfully edited`)
        }
        catch (error) {
            message.error("Failed to edit post. Clear your entries and check fields requirements shown in red")
        throw error
        }
    }

    const onReset = () => {
        document.getElementById("myform").reset();
    }
    
    useEffect(()=>{ 
        
        if (typeof element !== undefined){
            formedit.setFieldsValue ({
                title:element.title, 
                content: element.body
            }
            )
        }
        else {
            formedit.setFieldsValue ({
                title : '',
                content : '',
                })
        }
    } , [formedit,element])

    return (
    <div>
       
     <Form
         id= "myform"
      /*   labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }} */
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        form = {formedit}
     >
            <Item label="Title" 
                name="title" 
                rules={[{ required: true, message: 'Insert title. This field is required'}]}  
            >
            <Input/>
            </Item>
            <Item label="Content" 
                name="content" 
                rules={[{ required: true, message: 'Insert content.This field is required'}]}   
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

export default MyEditForm;