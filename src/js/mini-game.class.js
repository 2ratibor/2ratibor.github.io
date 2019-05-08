export class MiniGame {
	constructor(options) {

		this.game_container_id = options.game_container_id;

		this.field_cell_number = options.field_cell_number;

		this.points_to_victory = options.points_to_victory;

		this.game_container = null;

		this.player_score = null;

		this.computer_score = null;

		this.game_field = null;

		this.game_start_btn = null;

		this.player_time_input = null;

		this.field_cells = [];

		this.popup = null;

		this.popup_is_visible = false;

		this.can_close_popup = false;

		this.can_close_popup_timer = null;

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

			if (target.classList.contains('game-field-l-i-link')) {

				event.preventDefault();
			}
		});

		this.game_field.addEventListener('mousedown', (event) => {

			event.preventDefault();
		});

		this.game_field.addEventListener('selectstart', (event) => {

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

		link.innerHTML = '&nbsp;';

		li.appendChild(link);

		this.game_field.appendChild(li);

		this.field_cells.push(link);
	}

	initEvents() {

		this.player_time_input.addEventListener('keypress', (event) => {

			let char = this.getChar(event);

			if (!char || !this.isNumeric(char)) {

				event.preventDefault();
			}
		});

		this.player_time_input.addEventListener('keyup', (event) => {

			if (event.target.value.length) {

				this.player_time_input.classList.remove('input-invalid');

				this.activateButton();
			} else {

				this.disableButton();
			}
		});

		this.game_start_btn.addEventListener('click', (event) => {

			event.preventDefault();

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

		if (!filtered_field_cells.length) return;

		random_element = this.getUniqueRandomElement(filtered_field_cells);

		random_element.setAttribute('data-active', 'yellow');

		random_element.onclick = () => {

			if (user_activated_elem) return;

			user_activated_elem = true;

			random_element.setAttribute('data-active', 'green');

			this.player_score.innerHTML = +this.player_score.innerHTML + 1;
		};

		setTimeout(() => {

			random_element.onclick = null;

			if (!user_activated_elem) {

				random_element.setAttribute('data-active', 'red');

				this.computer_score.innerHTML = +this.computer_score.innerHTML + 1;
			}

			if (+this.player_score.innerHTML < this.points_to_victory && +this.computer_score.innerHTML < this.points_to_victory) {

				this.makeStep();
			} else {

				if (!this.popup) {

					this.createScorePopup();
				} else {

					this.updateScorePopup();
				}

				this.scorePopupShow();
			}
		}, +this.player_time_input.value);
	}

	getUniqueRandomElement(filtered_field_cells) {

		return filtered_field_cells[Math.floor(Math.random() * filtered_field_cells.length)];
	}

	createScorePopup() {

		let popup_btn_link = document.createElement('a'),
			popup_btn = document.createElement('span'),
			game_score_popup_header = document.createElement('h2'),
			data = this.getScoreData(),
			game_score_popup = document.createElement('div'),
			fireworks_block_1 = document.createElement('div'),
			fireworks_block_2 = document.createElement('div'),
			popup_container_inner = document.createElement('div');

		popup_btn_link.setAttribute('href', '#');

		popup_btn_link.className = 'btn-link-i';

		popup_btn_link.name = 'game_score_popup_btn';

		popup_btn_link.setAttribute('onclick', 'return false;');

		popup_btn_link.innerHTML = 'OK';


		popup_btn.className = 'btn-link btn-link-blue game-score-popup-btn';

		popup_btn.appendChild(popup_btn_link);


		game_score_popup_header.className = 'game-score-popup-header';

		game_score_popup_header.setAttribute('name', 'game_score_popup_header');

		game_score_popup_header.innerHTML = `Со счетом ${data.score} побеждает ${data.winner}!`;


		fireworks_block_1.className = 'before';

		fireworks_block_2.className = 'after';


		game_score_popup.className = 'popup-css game-score-popup';

		game_score_popup.setAttribute('name', 'game_score_popup');

		game_score_popup.appendChild(game_score_popup_header);

		game_score_popup.appendChild(popup_btn);


		popup_container_inner.className = 'popup-container-inner pyro';

		popup_container_inner.appendChild(fireworks_block_1);

		popup_container_inner.appendChild(fireworks_block_2);

		popup_container_inner.appendChild(game_score_popup);


		this.popup = document.createElement('div');

		this.popup.className = 'popup-container';

		this.popup.appendChild(popup_container_inner);

		this.popup.addEventListener('mousedown', (event) => {

			event.preventDefault();
		});

		this.popup.addEventListener('selectstart', (event) => {

			event.preventDefault();
		});


		document.addEventListener('click', (event) => {

			if (!this.popup_is_visible) return;

			let target = event.target;

			if (target.getAttribute('name') === 'game_score_popup_btn') {

				event.preventDefault();

				clearTimeout(this.can_close_popup_timer);

				this.scorePopupHide();

				this.scoreReset();

				this.gameFieldClear();

				this.activateButton();

				this.activateInput();

				return;
			}

			while (target !== document) {

				if (target.getAttribute('name') === 'game_score_popup') return;

				target = target.parentNode;
			}

			if (this.can_close_popup) {

				this.scorePopupHide();

				this.scoreReset();

				this.gameFieldClear();

				this.activateButton();

				this.activateInput();
			}
		});
	}

	updateScorePopup() {

		let game_score_popup_header = this.popup.querySelector('[name=game_score_popup_header]'),
			data = this.getScoreData();

		game_score_popup_header.innerHTML = `Со счетом ${data.score} побеждает ${data.winner}!`;
	}

	getScoreData() {

		let player_score = +this.player_score.innerHTML,
			computer_score = +this.computer_score.innerHTML,
			score = Math.max(player_score, computer_score) + ':' + Math.min(player_score, computer_score),
			winner = player_score > computer_score ? 'игрок' : 'компьютер';

		return {score, winner};
	}

	scorePopupShow() {

		document.body.appendChild(this.popup);

		this.popup_is_visible = true;

		// set the delay to avoid accidental pop-up closure
		this.can_close_popup_timer = setTimeout(() => {

			this.can_close_popup = true;
		}, 1000)
	}

	scorePopupHide() {

		document.body.removeChild(this.popup);

		this.popup_is_visible = false;

		this.can_close_popup = false;
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