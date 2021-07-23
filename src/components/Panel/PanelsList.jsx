//import Card from '../Cards/Card'
import MyPanel from "../Panel/Panel"

const PanelsList = (props) => {
  return(
        <div> 
        {props.data.map(element =>
        <MyPanel
            element = {element}
        />
        )}
    </div>
  )
}

export default PanelsList

