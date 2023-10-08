import Menu from "./Menu";
import React from "react";

function Screen(props) {
	let { selected, currentMenu, menuOpen, background } = props.state;
	let menu = props.state[currentMenu];

	return (
		//rendering the menu only if menuOpen is true
		<div className="Screen">
			<img className="wallpaper" src={background} alt="" />
			{menuOpen && <Menu selected={selected} menu={menu} />}
		</div>
	);
}

export default Screen;