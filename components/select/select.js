class Select {

	render() {
		const html = `
			<div class="select-container">
				<div class="select-counter">
				</div>
			</div>
		`;
	ROOT_SELECT.innerHTML = html;
	}
}

const selectPage = new Select();