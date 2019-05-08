import './scss/style.scss';
import { MiniGame } from "./js/mini-game.class";

window.onload = () => {

	new MiniGame({
		game_container_id: 'game_container',
		field_cell_number: 100,
		points_to_victory: 10
	});
};