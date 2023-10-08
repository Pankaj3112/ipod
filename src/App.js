import React from "react";
import Controls from "./Controls";
import Screen from "./Screen";
import ZingTouch from 'zingtouch';

class App extends React.Component {

	constructor() {
		super();

		//change is the change in distance from last point
		this.change = 0;

		//selected is the index of the selected option
		//menuOpen is a boolean to check if menu is open or not
		//currentMenu is the menu that is currently open
		//background is the background image of the screen
		this.state = {
			selected: 0,
			menuOpen: true,
			currentMenu: 'generalMenu',
			generalMenu: ['Games', 'Music', 'Settings', 'Cover Flow'],
			songsMenu: ['All Songs', 'Artists', 'Albums'],
			background: 'assets/wallpaper.jpg'
		}
	}

	componentDidMount = () => {
		//creating a listener that listens for any drag and capturing distance from last point
		var zt = new ZingTouch.Region(document.getElementsByClassName('buttons')[0]);
		zt.bind(document.getElementsByClassName('buttons')[0], 'rotate', (event) => {
			//only work if menu is open
			if(!this.state.menuOpen) return;

			//storing the change in distance
			this.change += event.detail.distanceFromLast;
			let {selected, currentMenu} = this.state;
			let length = this.state[currentMenu].length;

			//if change is greater than 60 or less than -60, change the selected option
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

	//func to handle clicks on manu button
	handleMenuButton = () => {
		const {menuOpen, currentMenu} = this.state;

		//setting the background image to wallpaper
		this.setState({
			background: 'assets/wallpaper.jpg'
		})

		//if menu is already open , go back to the previous menu
		if(menuOpen){
			if(currentMenu !== 'generalMenu'){
				this.setState({
					currentMenu: 'generalMenu'
				})
			}
			else{
				this.setState({
					menuOpen: false
				})
			}
		}
		//else close the menu
		else{
			this.setState({
				menuOpen: true
			})
		}
	}

	//Func to handle clicks on center/select button
	handleCenterButton = () => {
		const {selected, currentMenu} = this.state;
		const menu = this.state[currentMenu];

		// if clicked on music
		if(menu[selected] === 'Music'){
			this.setState({
				currentMenu: 'songsMenu',
				selected: 0,
			})
		}

		// if clicked on games
		else if(menu[selected] === 'Games'){
			this.setState({
				selected: 0,
				menuOpen: false,
				background: 'assets/game.jpg'
			})
		}

		// if clicked on settings
		else if(menu[selected] === 'Settings'){
			this.setState({
				selected: 0,
				menuOpen: false,
				background: 'assets/setting.png'
			})
		}

		// if clicked on cover flow
		else if(menu[selected] === 'Cover Flow'){
			this.setState({
				selected: 0,
				menuOpen: false,
				background: 'assets/coverflow.jpg'
			})
		}

		// if clicked on all songs
		else if(menu[selected] === 'All Songs'){
			this.setState({
				selected: 0,
				menuOpen: false,
				background: 'assets/allSongs.webp'
			})
		}
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
				<Controls 
					handleMenuButton = {this.handleMenuButton}
					handleCenterButton = {this.handleCenterButton}
				/>
			</div>
		);
	}
}

export default App;
