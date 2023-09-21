
function Menu(props) {
	let { selected, menu } = props;

	return (
		<div className="Menu">
			{
				menu.map((ele, index) => {
					return <li key={index} className={selected === index ? 'selected': ''}>{ele}</li>
				})
			}
		</div>
	);
}

export default Menu;