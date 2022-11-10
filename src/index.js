import generateHome from './home'
import generateMenu from './menu'

const homeButton = document.querySelector('.home-button')
const menuButton = document.querySelector('.menu-button')
const content = document.getElementById('content')

function generatePage(currentPage) {
	homeButton.classList.add('active')
	content.innerHTML = ''
	if (currentPage === 'home') content.append(generateHome())
	else content.append(generateMenu())
}

function setActive(clickedButton) {
	if (homeButton.classList.contains('active'))
		homeButton.classList.remove('active')
	if (menuButton.classList.contains('active'))
		menuButton.classList.remove('active')
	clickedButton.classList.add('active')
}

homeButton.addEventListener('click', e => {
	if (homeButton.classList.contains('active')) return
	else {
		generatePage('home')
		setActive(e.target)
	}
})

menuButton.addEventListener('click', e => {
	if (menuButton.classList.contains('active')) return
	else {
		generatePage('menu')
		setActive(e.target)
	}
})

generatePage('home')
