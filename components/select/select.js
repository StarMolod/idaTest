class Select {


render() {


	const html = `
		<div class="select ">
			<div class="select__header">
				<span class="select__name">Сортировать по: </span>
				<span class="select__current">цене</span>
				<div class="select__icon">
					<svg width="5" height="3" viewBox="0 0 5 3" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M5 0H0L2.5 2.5L5 0Z" fill="#59606D"/>
					</svg>
				</div>
			</div>
	
			<div class="select__body">
				<div class="select__item">По цене</div>
				<div class="select__item">По популярности</div>
			</div>
		</div>
	
	`;

		ROOT_SELECT.innerHTML = html;


		let selectStart = function () {
			let selectHeader = document.querySelectorAll('.select__header');
			let selectItem = document.querySelectorAll('.select__item');
		
			selectHeader.forEach(item => {
				item.addEventListener('click', selectToggle)
			});
		
			selectItem.forEach(item => {
				item.addEventListener('click', selectChoose)
			});
		
			function selectToggle() {
				this.parentElement.classList.toggle('is-active');
			}
		
			function selectChoose() {
				let text = this.innerText,
					selectStart = this.closest('.select'),
					currentText = selectStart.querySelector('.select__current');
				currentText.innerText = text.substr(2);
				selectStart.classList.remove('is-active');
		
			}
		
		};
		selectStart();
	}
	
}


const selectPage = new Select();


selectPage.render();