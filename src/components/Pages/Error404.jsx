import image404 from '../../images/404_ingles.png'

const Error404 = () => {
  return (
    <div className="error">
      <img src={image404} alt={'error404_NotFound'}/>
    </div>
  );  
};

export default Error404