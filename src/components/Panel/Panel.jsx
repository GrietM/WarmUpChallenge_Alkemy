import { Collapse, message } from 'antd';

import {EditOutlined,DeleteOutlined} from '@ant-design/icons';
const { Panel } = Collapse;

const MyPanel = (props) => {
 const element = props.element

  const genExtra = () => (
  <EditOutlined style={{fontSize:'20px', color:'blue'}}
      onClick={event => {
      // If you don't want click extra trigger collapse, you can prevent this:
      event.stopPropagation();
      message.success("open modal with edit form")
    }}
  />
)

const genExtra2 = () => (
  <DeleteOutlined style={{fontSize:'20px', color:'red'}}
    onClick={event => {
      // If you don't want click extra trigger collapse, you can prevent this:
      event.stopPropagation();
      message.success("open modal to confirm deletion")
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
  </>
)
}

export default MyPanel