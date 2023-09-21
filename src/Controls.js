
function Controls() {
    return (
      <div className="Controls">
        <div className="buttons">
            <button className="menu">MENU</button>
            <button className="prev"><i className="fa-solid fa-backward"></i></button>
            <button className="next"><i className="fa-solid fa-forward"></i></button>
            <button className="play"><i className="fa-solid fa-stop"></i></button>
        </div>
        <button className="center"></button>
      </div>
    );
}
  
export default Controls;
  