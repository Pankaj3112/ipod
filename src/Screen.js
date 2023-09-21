import Menu from "./Menu";
import React from "react";

function Screen(props) {
	let { selected, currentMenu, menuOpen } = props.state;
	let menu = props.state[currentMenu];

	return (
		<div className="Screen">
			{menuOpen && <Menu selected={selected} menu={menu}/>}
		</div>
	);
}

export default Screen;