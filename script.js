document.body.addEventListener('keydown',(event)=>{
	let keyPressed = event.code
	playSound(keyPressed.toLowerCase())
})
document.querySelector('.composer button').addEventListener('click',()=>{
	let createMusic = document.querySelector('#input').value
	if (createMusic !== ''){
		let arraySong = createMusic.split('')
		playComposition(arraySong)
	}
})
playSound=sound=>{
	console.log(`key pressed: ${sound}`)
	let audioElement = document.querySelector(`#s_${sound}`)
	let keyElement = document.querySelector(`div[data-key="${sound}"]`)
	if (audioElement){
		audioElement.currentTime = 0
		audioElement.play()
		console.log(`${sound} played!`)
	}
	if (keyElement){
		keyElement.classList.add('active')
		setTimeout(()=>{
			keyElement.classList.remove('active')
		},200)
	}
}
playComposition=(arraySong)=>{
	let delay = 0, time = 250
	for (let item of arraySong){
		setTimeout(()=>{
			playSound(`key${item}`)
		}, delay)
		delay += time
	}

}