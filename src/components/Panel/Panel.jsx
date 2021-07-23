import { Collapse, message } from 'antd';

import {EditOutlined,DeleteOutlined} from '@ant-design/icons';
const { Panel } = Collapse;

const MyPanel = (props) => {
 const element = props.element

 const genExtra = () => (
  <EditOutlined
    onClick={event => {
      // If you don't want click extra trigger collapse, you can prevent this:
      event.stopPropagation();
      message.success("open modal with edit form")
    }}
  />
)

const genExtra2 = () => (
  <DeleteOutlined
    onClick={event => {
      // If you don't want click extra trigger collapse, you can prevent this:
      event.stopPropagation();
      message.success("open modal to confirm deletion")
    }}
  />
)

return (
  <>
  <Collapse accordion>
    <Panel 
        header= {element.title} 
        key="1" 
        extra={genExtra()}
        //Darío si ves esto... como hago para pasarle dos valores a la prop extra 
        // de manera de poder agregar genExtra2 para la accion de delete?
        //extra={genExtra2()}
        >
      <p>{element.body}</p>
    </Panel>
  </Collapse>
  </>
)
}

export default MyPanel