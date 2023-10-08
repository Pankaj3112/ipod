
function Menu(props) {
	let { selected, menu } = props;

	return (
		<div className="Menu">
			<h2>iPod.js</h2>
			{
				menu.map((ele, index) => {
					//rendering the menu and highlighting the selected option
					return <li key={index} className={selected === index ? 'selected' : ''}>{ele} <span>&gt;</span> </li>
				})
			}
		</div>
	);
}

export default Menu;