import { ModalWindow } from "./modal-window.class";

export class MiniGame {
	constructor(options) {

		this.game_container_id = options.game_container_id;

		this.field_cell_number = options.field_cell_number;

		this.points_to_victory = options.points_to_victory;

		this.fireworks_container_css_class = options.fireworks_container_css_class;

		this.fireworks_block_before_css_class = options.fireworks_block_before_css_class;

		this.fireworks_block_after_css_class = options.fireworks_block_after_css_class;

		this.game_container = null;

		this.player_score = null;

		this.computer_score = null;

		this.game_field = null;

		this.game_start_btn = null;

		this.player_time_input = null;

		this.field_cells = [];

		this.score_popup = null;

		this.message_popup = null;

		this.initElements();

		this.initPreventEvents();

		this.fillField();
	}

	initElements() {

		this.game_container = document.getElementById(this.game_container_id);

		this.player_score = this.game_container.querySelector('[name=player_score]');

		this.computer_score = this.game_container.querySelector('[name=computer_score]');

		this.game_field = this.game_container.querySelector('[name=game_field]');

		this.game_start_btn = this.game_container.querySelector('[name=game_start_btn]');

		this.player_time_input = this.game_container.querySelector('[name=player_time_input]');
	}

	initPreventEvents() {

		this.game_field.addEventListener('click', (event) => {

			let target = event.target;

			if (target.getAttribute('name') === 'game_field_link') {

				event.preventDefault();
			}
		});

		this.game_field.addEventListener('mousedown', (event) => {

			event.preventDefault();
		});

		this.game_field.addEventListener('selectstart', (event) => {

			event.preventDefault();
		});

		this.game_start_btn.addEventListener('click', (event) => {

			event.preventDefault();
		});
	}

	fillField() {

		let i = 0,
			interval_handler = null;

		interval_handler = setInterval(() => {

			this.createCell();

			i = i + 1;

			if (i >= this.field_cell_number) {

				clearInterval(interval_handler);

				this.activateInput();

				this.player_time_input.focus();

				this.initEvents();
			}
		}, 40);
	}

	createCell() {

		let li = document.createElement('li'),
			link = document.createElement('a');

		li.className = 'game-field-l-i';

		link.setAttribute('href', '#');

		link.className = 'game-field-l-i-link';

		link.name = 'game_field_link';

		link.innerHTML = '&nbsp;';

		li.appendChild(link);

		this.game_field.appendChild(li);

		this.field_cells.push(link);
	}

	initEvents() {

		// letter lock for desktop
		this.player_time_input.addEventListener('keypress', (event) => {

			let char = this.getChar(event);

			if (!char || !this.isNumeric(char)) {

				event.preventDefault();
			}
		});

		this.player_time_input.addEventListener('keyup', (event) => {

			let target = event.target;

			// letter lock for mobile device
			target.value = target.value.replace(/\D+/g, '');

			if (target.value.length) {

				this.player_time_input.classList.remove('input-invalid');

				this.activateButton();
			} else {

				this.disableButton();
			}
		});

		this.game_start_btn.addEventListener('click', (event) => {

			let target = event.target;

			if (target.parentNode.classList.contains('disabled')) {

				if (this.player_time_input.disabled === false) {

					this.player_time_input.classList.add('input-invalid');

					this.player_time_input.focus();
				}

				return;
			}

			this.disableInput();

			this.disableButton();

			this.makeStep();
		});
	}


	getChar(event) {
		if (event.which == null) { // IE
			if (event.keyCode < 32) return null; // спец. символ
			return String.fromCharCode(event.keyCode)
		}

		if (event.which != 0 && event.charCode != 0) { // все кроме IE
			if (event.which < 32) return null; // спец. символ
			return String.fromCharCode(event.which); // остальные
		}

		return null; // спец. символ
	}

	isNumeric(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	}

	activateButton() {

		this.game_start_btn.parentNode.classList.remove('disabled');
	}

	disableButton() {

		this.game_start_btn.parentNode.classList.add('disabled');
	}

	activateInput() {

		this.player_time_input.disabled = false;
	}

	disableInput() {

		this.player_time_input.disabled = true;
	}

	makeStep() {

		let filtered_field_cells = this.field_cells.filter(elem => !elem.hasAttribute('data-active')),
			random_element = null,
			user_activated_elem = false;

		if (!filtered_field_cells.length) {

			if (!this.message_popup) {

				this.createMessagePopup();
			}

			this.showMessagePopup();

			return;
		}

		random_element = this.getUniqueRandomElement(filtered_field_cells);

		random_element.setAttribute('data-active', 'yellow');

		random_element.onclick = () => {

			if (user_activated_elem) return;

			user_activated_elem = true;

			random_element.setAttribute('data-active', 'green');

			this.increaseScore(this.player_score);
		};

		setTimeout(() => {

			random_element.onclick = null;

			if (!user_activated_elem) {

				random_element.setAttribute('data-active', 'red');

				this.increaseScore(this.computer_score);
			}

			if (+this.player_score.innerHTML < this.points_to_victory && +this.computer_score.innerHTML < this.points_to_victory) {

				this.makeStep();
			} else {

				if (!this.score_popup) {

					this.createScorePopup();
				}

				this.scorePopupShow();
			}
		}, +this.player_time_input.value);
	}

	createMessagePopup() {

		let popup_content = `
				<h3 class="message-popup-header">
					Игра окончена вничью, так как ни один из игроков не набрал нужного количества очков
				</h3>
			`;

		this.message_popup = new ModalWindow({
			popup_type: 'message_popup',
			popup_css_class: 'message-popup'
		});

		this.message_popup.setContent(popup_content);

		document.addEventListener('closepopup', (event) => {

			if (event.detail.popup_type === 'message_popup') {

				this.resetGame();
			}
		});
	}

	showMessagePopup() {

		this.message_popup.open();
	}

	getUniqueRandomElement(filtered_field_cells) {

		return filtered_field_cells[Math.floor(Math.random() * filtered_field_cells.length)];
	}

	increaseScore(person_score) {

		person_score.innerHTML = +person_score.innerHTML + 1;
	}

	createScorePopup() {

		let popup_container_inner = null,
			fireworks_block_before = document.createElement('div'),
			fireworks_block_after = document.createElement('div');

		this.score_popup = new ModalWindow({
			popup_type: 'score_popup',
			popup_css_class: 'game-score-popup'
		});

		fireworks_block_before.className = this.fireworks_block_before_css_class;

		fireworks_block_before.innerHTML = '&nbsp;';

		fireworks_block_after.className = this.fireworks_block_after_css_class;

		fireworks_block_after.innerHTML = '&nbsp;';

		popup_container_inner = this.score_popup.getPopup().querySelector('[name=popup_container_inner]');

		popup_container_inner.insertBefore(fireworks_block_after, popup_container_inner.firstElementChild);

		popup_container_inner.insertBefore(fireworks_block_before, popup_container_inner.firstElementChild);

		document.addEventListener('closepopup', (event) => {

			if (event.detail.popup_type === 'score_popup') {

				this.resetGame();
			}
		});
	}

	resetGame() {

		this.scoreReset();

		this.gameFieldClear();

		this.activateInput();

		this.activateButton();
	}

	getScoreData() {

		let player_score = +this.player_score.innerHTML,
			computer_score = +this.computer_score.innerHTML,
			score = Math.max(player_score, computer_score) + ':' + Math.min(player_score, computer_score),
			winner = player_score > computer_score ? 'игрок' : 'компьютер';

		return {score, winner};
	}

	scorePopupShow() {

		let popup_container_inner = this.score_popup.getPopup().querySelector('[name=popup_container_inner]'),
			data = this.getScoreData(),
			popup_content = `
				<h2 class="game-score-popup-header">
					Со счетом ${data.score} побеждает ${data.winner}!
				</h2>
			`;

		if (data.winner === 'игрок') {

			popup_container_inner.classList.add(this.fireworks_container_css_class);
		} else {

			popup_container_inner.classList.remove(this.fireworks_container_css_class);
		}

		this.score_popup.setContent(popup_content);

		this.score_popup.open();
	}

	scoreReset() {

		this.player_score.innerHTML = 0;

		this.computer_score.innerHTML = 0;
	}

	gameFieldClear() {

		let activatedCells = this.field_cells.filter(elem => elem.hasAttribute('data-active'));

		for (let cell of activatedCells) {

			cell.removeAttribute('data-active');
		}
	}
}