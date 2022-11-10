export default function generateHome() {
	const main = document.createElement('main')
	main.classList.add('home')
	const h1 = document.createElement('h1')
	h1.textContent = 'Ramen.'
	h1.classList.add('animate__animated', 'animate__fadeInLeft')
	main.appendChild(h1)
	return main
}
