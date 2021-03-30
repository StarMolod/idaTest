function render() {
	const productsStore = localStorageUtil.getProducts();
	const menuPage = new Menu();
	const selectPage = new Select();


	selectPage.render();
	menuPage.render();
	headerPage.render(productsStore.length);
	productsPage.render();

}

let CATALOG = [];


//server/catalog.json
fetch('server/catalog.json')
	.then(res => res.json())
	.then(body => {
		CATALOG = body;
		render();
	})
	.catch(error => {
		console.log(error);
	});

	/*
	
npm i http-server -g 
http-server

	*/