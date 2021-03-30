class Shopping {
	handleClear() {
		ROOT_SHOPPING.innerHTML = '';
   }

	render() {
		const productsStore = localStorageUtil.getProducts();
		let htmlCatalog = '';

		CATALOG.forEach(({ id, name, price, img, raiting }) => {
			if (productsStore.indexOf(id) !== -1) {
				htmlCatalog += `
					<div class="shopping-element">
						<img class="shopping-element__img" src="${img}" />
						<div class="shopping-element-info">
							<span class="shopping-element-info__name">${name}</span>
							<span class="shopping-element-info__price">${price.toLocaleString()} ₽</span>
							<span class="shopping-element-info__raiting">
								<img src="img/star_raiting.svg" />
								<p>${raiting}</p>
							</span>
						</div>
						<div class="products-element__basket">
							<img src="img/basket3.svg" />
						</div>
					</div>
					`;
			}
		});

		const html = `
			<div class="shopping-container">
			<div class="shopping-opacityblock"></div>
				<div class="shopping-buyblock">
					<div class="shopping__close" onclick="shoppingPage.handleClear();"></div>
					<h1 class="shopping-buyblock__h1">Корзина</h1>
					<p class="shopping-buyblock__p">Товары в корзине</p>
					${htmlCatalog}
				</div>
			</div>
		`;
		ROOT_SHOPPING.innerHTML = html;
	}
}

const shoppingPage = new Shopping();


