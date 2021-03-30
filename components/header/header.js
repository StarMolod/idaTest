class Header {
	handlerOpenShoppingPage() {
		shoppingPage.render();
   }


	render(count) {
		const html = `
			<div class="header-container">
				<div class="header-section">
					<a class="header__logo" href="#">TestList</a>
					<div class="header-counter" onclick="headerPage.handlerOpenShoppingPage();">
						<img class="header__img" src="img/basket1.svg" alt="#">
						<span class="header__count">
							${count}	
						</span>
					</div>
				</div>
			</div>
		`;
	ROOT_HEADER.innerHTML = html;
	}
}

const headerPage = new Header();

const productsStore = localStorageUtil.getProducts();
headerPage.render(productsStore.length);
