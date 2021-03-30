class Select {


	render() {
		const html = `
			<div>
				<label>Сортировать по:</label>
				<select class="select" id="selectgroup">
					<option>цене</option>
					<option>по популярности</option>
				</select>
			</div>
	
		`;
		ROOT_SELECT.innerHTML = html;
	}
}

const selectPage = new Select();


selectPage.render();