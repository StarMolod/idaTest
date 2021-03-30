class Products {
	constructor() {

		this.classNameActive = 'products-element__btn_active'; //'products-element__btn_active'
		this.labelAdd = `<svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M1.92 0.74C2.03331 0.588916 2.21115 0.5 2.4 0.5H9.6C9.78885 0.5 9.96669 0.588916 10.08 0.74L11.88 3.14C11.9579 3.24386 12 3.37018 12 3.5V11.9C12 12.3774 11.8104 12.8352 11.4728 13.1728C11.1352 13.5104 10.6774 13.7 10.2 13.7H1.8C1.32261 13.7 0.864773 13.5104 0.527208 13.1728C0.189642 12.8352 0 12.3774 0 11.9V3.5C0 3.37018 0.0421067 3.24386 0.12 3.14L1.92 0.74ZM2.7 1.7L1.2 3.7V11.9C1.2 12.0591 1.26321 12.2117 1.37574 12.3243C1.48826 12.4368 1.64087 12.5 1.8 12.5H10.2C10.3591 12.5 10.5117 12.4368 10.6243 12.3243C10.7368 12.2117 10.8 12.0591 10.8 11.9V3.7L9.3 1.7H2.7Z" fill="#959DAD"/>
		<path fill-rule="evenodd" clip-rule="evenodd" d="M0 3.5C0 3.16863 0.268629 2.9 0.6 2.9H11.4C11.7314 2.9 12 3.16863 12 3.5C12 3.83137 11.7314 4.1 11.4 4.1H0.6C0.268629 4.1 0 3.83137 0 3.5Z" fill="#959DAD"/>
		<path fill-rule="evenodd" clip-rule="evenodd" d="M3.6 5.3C3.93137 5.3 4.2 5.56863 4.2 5.9C4.2 6.37739 4.38964 6.83523 4.72721 7.17279C5.06477 7.51036 5.52261 7.7 6 7.7C6.47739 7.7 6.93523 7.51036 7.27279 7.17279C7.61036 6.83523 7.8 6.37739 7.8 5.9C7.8 5.56863 8.06863 5.3 8.4 5.3C8.73137 5.3 9 5.56863 9 5.9C9 6.69565 8.68393 7.45871 8.12132 8.02132C7.55871 8.58393 6.79565 8.9 6 8.9C5.20435 8.9 4.44129 8.58393 3.87868 8.02132C3.31607 7.45871 3 6.69565 3 5.9C3 5.56863 3.26863 5.3 3.6 5.3Z" fill="#959DAD"/>
	</svg>`;
		this.labelRemove = `<svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M1.92 0.74C2.03331 0.588916 2.21115 0.5 2.4 0.5H9.6C9.78885 0.5 9.96669 0.588916 10.08 0.74L11.88 3.14C11.9579 3.24386 12 3.37018 12 3.5V11.9C12 12.3774 11.8104 12.8352 11.4728 13.1728C11.1352 13.5104 10.6774 13.7 10.2 13.7H1.8C1.32261 13.7 0.864773 13.5104 0.527208 13.1728C0.189642 12.8352 0 12.3774 0 11.9V3.5C0 3.37018 0.0421067 3.24386 0.12 3.14L1.92 0.74ZM2.7 1.7L1.2 3.7V11.9C1.2 12.0591 1.26321 12.2117 1.37574 12.3243C1.48826 12.4368 1.64087 12.5 1.8 12.5H10.2C10.3591 12.5 10.5117 12.4368 10.6243 12.3243C10.7368 12.2117 10.8 12.0591 10.8 11.9V3.7L9.3 1.7H2.7Z" fill="#111111"/>
		<path fill-rule="evenodd" clip-rule="evenodd" d="M0 3.5C0 3.16863 0.268629 2.9 0.6 2.9H11.4C11.7314 2.9 12 3.16863 12 3.5C12 3.83137 11.7314 4.1 11.4 4.1H0.6C0.268629 4.1 0 3.83137 0 3.5Z" fill="#111111"/>
		<path fill-rule="evenodd" clip-rule="evenodd" d="M3.6 5.3C3.93137 5.3 4.2 5.56863 4.2 5.9C4.2 6.37739 4.38964 6.83523 4.72721 7.17279C5.06477 7.51036 5.52261 7.7 6 7.7C6.47739 7.7 6.93523 7.51036 7.27279 7.17279C7.61036 6.83523 7.8 6.37739 7.8 5.9C7.8 5.56863 8.06863 5.3 8.4 5.3C8.73137 5.3 9 5.56863 9 5.9C9 6.69565 8.68393 7.45871 8.12132 8.02132C7.55871 8.58393 6.79565 8.9 6 8.9C5.20435 8.9 4.44129 8.58393 3.87868 8.02132C3.31607 7.45871 3 6.69565 3 5.9C3 5.56863 3.26863 5.3 3.6 5.3Z" fill="#111111"/>
	</svg>`;
	}

	handlerSetLocationStorage(element, id) {
		const { pushProduct, products } = localStorageUtil.putProducts(id);

		if (pushProduct) {
			element.classList.add(this.classNameActive);
			element.innerHTML = this.labelRemove; //innerText
		} else {
			element.classList.remove(this.classNameActive);
			element.innerHTML = this.labelAdd; //innerText
		}
		headerPage.render(products.length);
	}

	render() {
		const productsStore = localStorageUtil.getProducts();
		let htmlCatalog = '';

		CATALOG.forEach(({ id, name, price, img, raiting }) => {
			let activeClass = '';
			let activeText = '';

	
			if (productsStore.indexOf(id) === -1) {
				activeText = this.labelAdd;
			} else {
				activeClass = ' ' + this.classNameActive;
				activeText = this.labelRemove;
			}

			htmlCatalog += `
				<li class="products-element">
					<div class="products-element-rowblock">
						<span class="products-element__raiting">
							<svg class width="20" height="38" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect width="20" height="20" fill="white"/>
								<path fill-rule="evenodd" clip-rule="evenodd" d="M10 3.125C10.2379 3.125 10.4552 3.26005 10.5605 3.47336L12.3464 7.09154L16.3404 7.67532C16.5758 7.70972 16.7712 7.87473 16.8445 8.10098C16.9179 8.32723 16.8565 8.57552 16.6861 8.74147L13.7966 11.5559L14.4785 15.5318C14.5187 15.7663 14.4223 16.0033 14.2299 16.1432C14.0374 16.283 13.7822 16.3014 13.5716 16.1907L10 14.3124L6.42843 16.1907C6.21785 16.3014 5.96267 16.283 5.77018 16.1432C5.5777 16.0033 5.48129 15.7663 5.52151 15.5318L6.20344 11.5559L3.31394 8.74147C3.14355 8.57552 3.08213 8.32723 3.15549 8.10098C3.22885 7.87473 3.42428 7.70972 3.65963 7.67532L7.6536 7.09154L9.43958 3.47336C9.54487 3.26005 9.76213 3.125 10 3.125ZM10 5.16203L8.62921 7.93914C8.53825 8.12342 8.36251 8.25121 8.15916 8.28093L5.09278 8.72913L7.3111 10.8898C7.45852 11.0334 7.52581 11.2403 7.49102 11.4432L6.96763 14.4948L9.70911 13.0531C9.89122 12.9573 10.1088 12.9573 10.2909 13.0531L13.0324 14.4948L12.509 11.4432C12.4742 11.2403 12.5415 11.0334 12.6889 10.8898L14.9073 8.72913L11.8409 8.28093C11.6375 8.25121 11.4618 8.12342 11.3708 7.93914L10 5.16203Z" fill="#F2C94C"/>
								<path d="M6.5 11L4 8H10H16L13.5 11V14.5L13 15.5L10 14L9 14.5L6.5 15.5V14.5V11Z" fill="#F2C94C"/>
							</svg>
							<p>${raiting}</p>
						</span>
						<img class="products-element__img" src="${img}" />
						<button class="products-element__btn${activeClass}" onclick="productsPage.handlerSetLocationStorage(this, '${id}');">
							${activeText}
						</button>
					</div>
					<div class="products-element-columnblock">
						<span class="products-element__name">${name}</span>
						<span class="products-element__price">${price.toLocaleString()} ₽</span>
					</div> 
				</li>
			`;
		})

		const html = `
			<ul class="products-container">
				${htmlCatalog}
			</ul>
		`;

		ROOT_PRODUCTS.innerHTML = html;
	}
}

const productsPage = new Products();
productsPage.render();