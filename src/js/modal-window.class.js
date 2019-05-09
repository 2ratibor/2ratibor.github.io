export class ModalWindow {
	constructor(options) {

		this.popup_type = options.popup_type || 'default_popup';

		this.popup_css_class = options.popup_css_class;

		this.popup_template = `
			<div class="popup-container-inner" name="popup_container_inner">
				<div class="before"></div>
				<div class="after"></div>
				
				<div class="popup-css ${this.popup_css_class}" name="popup">
					<div name="popup_content"></div>
					
					<div class="popup-close-btn-wrap">
						<span class="btn-link btn-link-blue popup-close-btn">
							<a href="#" class="btn-link-i" name="popup_close_btn">
								OK
							</a>
						</span>
					</div>
				</div>
			</div>
		`;

		this.popup = null;

		this.can_close_popup = false;

		this.can_close_popup_timer = null;

		this.createPopup();
	}

	createPopup() {

		this.popup = document.createElement('div');

		this.popup.className = 'popup-container';

		this.popup.innerHTML = this.popup_template;

		this.popup.addEventListener('click', (event) => {

			let target = event.target;

			if (target.getAttribute('name') === 'popup_close_btn') {

				event.preventDefault();

				this.close();

				return;
			}

			while (target !== this.popup) {

				if (target.getAttribute('name') === 'popup') return;

				target = target.parentNode;
			}

			if (this.can_close_popup) {

				this.close();
			}
		});
	}

	getPopup() {

		return this.popup;
	}

	setContent(popup_content) {

		this.popup.querySelector('[name=popup_content]').innerHTML = popup_content;
	}

	open() {

		document.body.appendChild(this.popup);

		// set the delay to avoid accidental pop-up closure
		this.can_close_popup_timer = setTimeout(() => {

			this.can_close_popup = true;
		}, 1000)
	}

	close() {

		let popup_close_event = new CustomEvent('closepopup', {
			bubbles: true,
			cancelable: true,
			detail: {
				popup_type: this.popup_type
			}
		});

		this.popup.dispatchEvent(popup_close_event);

		document.body.removeChild(this.popup);

		clearTimeout(this.can_close_popup_timer);

		this.can_close_popup = false;
	}
}