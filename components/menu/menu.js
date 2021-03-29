class Menu {

	render() {
		const html = `
			<div class="menu">
				<h1>Каталог</h1>
				<a href="">Рюкзаки</a>
				<a href="">Футболки</a>
				<a href="">Рубашки</a>
			</div>
		`;

		ROOT_MENU.innerHTML = html;
	}
}

const menuPage = new Menu();
menuPage.render();