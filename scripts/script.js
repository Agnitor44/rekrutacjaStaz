const bold = document.querySelector('.bold')
const italic = document.querySelector('.italic')
const center = document.querySelector('.center')
const list = document.querySelector('.list')
const under = document.querySelector('.under')
const form = document.querySelector('form.save')
const panel = document.querySelector('.box')
const names = document.querySelector('.name')
const load = document.querySelector('.load')
const loadForm = document.querySelector('form.loadForm')
const buttons = document.querySelector('div.buttonZone')
let boldV = false
let italV = false

let underV = false


panel.addEventListener('focusin', () => {
	buttons.style.display = 'flex'
})


bold.addEventListener('click', (e) => {

	boldV = !boldV
	if(boldV) {
		bold.style.backgroundColor = 'black'
		bold.style.color = 'white'
		
	}
	if(!boldV) {
		bold.style.backgroundColor = 'white'
		bold.style.color = 'black'
	}
	document.execCommand('bold', false, null);
})


italic.addEventListener('click', (e) => {
	italV = !italV
	if(italV) {
		italic.style.backgroundColor = 'black'
		italic.style.color = 'white'
	}
	if(!italV) {
		italic.style.backgroundColor = 'white'
		italic.style.color = 'black'
	}
	document.execCommand('italic', false, null);
})


center.addEventListener('click', (e) => {
	

	document.execCommand('justifyCenter', false, null);
})
under.addEventListener('click', (e) => {
	underV = !underV
	if(underV) {
		under.style.backgroundColor = 'black'
		under.style.color = 'white'
	}
	if(!underV) {
		under.style.backgroundColor = 'white'
		under.style.color = 'black'
	}
	document.execCommand('underline', false, null);
})
list.addEventListener('click', (e) => {
	document.execCommand('insertUnorderedList', false, null);
})




load.addEventListener('change', (e) => {
	let file = Object.values(load.files)
     let name = file[0].name
	 fetch(`../saved/${name}`).then(res => res.json()).then(data => panel.innerHTML = data)

	
})

loadForm.addEventListener('submit', (e) => {
	e.preventDefault()
	console.log('dasdas')
	
})




form.addEventListener('submit', (e) => {
	e.preventDefault()
	if(!names.value || !panel.textContent) return alert("every field must be filled")
	const obj = {
		name: names.value,
		txt: panel.innerHTML
	}
	
	
	fetch('http://localhost:5000/api/savingData', {
        method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(obj)
                  })
})

