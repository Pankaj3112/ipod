import React from "react";
import Controls from "./Controls";
import Screen from "./Screen";
import ZingTouch from 'zingtouch';

class App extends React.Component {

	constructor() {
		super();
		this.change = 0;

		this.state = {
			selected: 0,
			menuOpen: true,
			currentMenu: 'generalMenu',
			generalMenu: ['Games', 'Music', 'Settings', 'Cover Flow'],
			songsMenu: ['All Songs', 'Artists', 'Albums'],
		}
	}

	componentDidMount = () => {
		var zt = new ZingTouch.Region(document.getElementsByClassName('buttons')[0]);
		zt.bind(document.getElementsByClassName('buttons')[0], 'rotate', (event) => {
			this.change += event.detail.distanceFromLast;
			let {selected, currentMenu} = this.state;
			let length = this.state[currentMenu].length;

			if(this.change > 60){
				selected++;
				selected %= length;
				this.setState({
					selected
				})
				this.change = 0;
			}

			if(this.change < -60){
				if(selected === 0){
					selected = length;
				}

				selected--;
				selected %= length;
				this.setState({
					selected
				})
				this.change = 0;
			}

		})
	}


	render() {

		return (
			<div className="App">
				<div className="img">
					<img src="assets/ipod.webp" alt=""/>
				</div>

				<Screen 
					state={this.state}
				/>
				<Controls />
			</div>
		);
	}
}

export default App;
