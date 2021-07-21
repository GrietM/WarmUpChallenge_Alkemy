import { Collapse } from 'antd';
import { EditOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const MyList = () => {

return (
  <Collapse accordion>
    <Panel header="Traer el titulo del post1 por parametro" key="1" icon="SettingOutlined">
      <p>{text}</p>
    </Panel>
    <Panel header="Traer el titulo del post2 por parametro" key="2" >
      <p>{text}</p>
    </Panel>
    <Panel header="Traer el titulo del post3 por parametro" key="3">
      <p>{text}</p>
    </Panel>
    {/* En realidad deberia hacer un map del get y renderizar tantos Panel como elementos traiga la rta */}
  </Collapse>
)
}

export default MyList