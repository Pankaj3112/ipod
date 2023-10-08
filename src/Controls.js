
function Controls(props) {
    const {handleMenuButton, handleCenterButton} = props;

    return (
      <div className="Controls">
        <div className="buttons">
        </div>
        
        <button onClick={handleMenuButton} className="menu">MENU</button>
        <button className="prev"><i className="fa-solid fa-backward"></i></button>
        <button className="next"><i className="fa-solid fa-forward"></i></button>
        <button className="play"><i className="fa-solid fa-stop"></i></button>
        <button onClick={handleCenterButton} className="center"></button>
      </div>
    );
}
  
export default Controls;
  