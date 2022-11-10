function generateMenuItem(source, description = 'blank', price = 0) {
	const menuItem = document.createElement('div')
	menuItem.classList.add('food-item', 'animate__animated', 'animate__fadeIn')

	const img = document.createElement('img')
	img.src = source

	const descriptionWrapper = document.createElement('div')
	descriptionWrapper.classList.add('description-wrapper')

	const descriptionP = document.createElement('p')
	descriptionP.textContent = description

	const priceP = document.createElement('p')
	priceP.textContent = `$${price}`

	descriptionWrapper.append(descriptionP, priceP)

	menuItem.append(img, descriptionWrapper)
	return menuItem
}

export default function generateMenu() {
	const main = document.createElement('main')
	main.classList.add('menu')

	const ramen1 = generateMenuItem(
		'../dist/imgs/ramen-1.png',
		'Filler text describing dish',
		15
	)

	const ramen2 = generateMenuItem(
		'../dist/imgs/ramen-2.png',
		'Filler text describing dish',
		14
	)

	const ramen3 = generateMenuItem(
		'../dist/imgs/ramen-3.png',
		'Filler text describing dish',
		16
	)

	const ramen4 = generateMenuItem(
		'../dist/imgs/ramen-4.png',
		'Filler text describing dish',
		15
	)

	main.append(ramen1, ramen2, ramen3, ramen4)

	return main
}
