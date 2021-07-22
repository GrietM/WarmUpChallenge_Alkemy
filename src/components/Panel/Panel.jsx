import { Collapse } from 'antd';
const { Panel } = Collapse;

const MyPanel = (props) => {
 const element = props.element

return (
  <>
  <Collapse accordion>
    <Panel 
        header= {element.title} 
        key="1" 
        >
      <p>{element.body}</p>
    </Panel>
  </Collapse>
  </>
)
}

export default MyPanel