const slider = document.querySelector('#sliderInformacion');
let sliderSection = document.querySelectorAll('.info');
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnL = document.querySelector('#izquierdo');
const btnd = document.querySelector('#derecho');

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Li_si() {
	let inf = document.querySelectorAll('.info h1')
	let navInfo = document.querySelectorAll('.h3nav ul li')
	let info2 = inf[1]
	for(let i=0; i<navInfo.length; i++){
		if(info2.textContent == navInfo[i].textContent){
			navInfo[i].style.backgroundColor = 'rgba(155, 155, 155, 0.7)';
			navInfo[i].style.borderRadius = '.3rem'
			navInfo[i].style.color = '#fff'
		}
	}
}
function Li_no(){
	let inf = document.querySelectorAll('.info h1')
	let navInfo = document.querySelectorAll('.h3nav ul li')
	let info2 = inf[1]
	for(let i=0; i<navInfo.length; i++){
		if(info2.textContent == navInfo[i].textContent){
			navInfo[i].style.backgroundColor = '#fff'
			navInfo[i].style.color = '#000'
		}
	}
}

function Next() {
	Li_no()
	let sliderSectionFirst = document.querySelectorAll('.info')[0];
	slider.style.marginLeft = '-200%';
	slider.style.transition = 'all .5s';
	setTimeout(function(){
		slider.style.transition = 'none';
		slider.insertAdjacentElement('beforeend', sliderSectionFirst);
		slider.style.marginLeft = '-100%';
		Li_si()
	}, 500);
}

function Prev() {
	Li_no()
	let sliderSection = document.querySelectorAll('.info');
	let sliderSectionLast = sliderSection[sliderSection.length -1];
	slider.style.marginLeft = '0';
	slider.style.transition = 'all .5s';
	setTimeout(function(){
		slider.style.transition = 'none';
		slider.insertAdjacentElement('afterbegin', sliderSectionLast);
		slider.style.marginLeft = '-100%';
		Li_si()
	}, 500);
}
// document.querySelector('.h3nav').addEventListener('click', (e) => {
// 	let inf = document.querySelectorAll('.info h1')
// 	let navInfo = document.querySelectorAll('.h3nav ul li')
// 	let li
// 	let n=0
// 	if(e.target.classList.contains('li')){
// 		if (e.target == navInfo[0]){
// 			li = 1
// 		}
// 		if (e.target == navInfo[1]){
// 			li = 2
// 		}
// 		if (e.target == navInfo[2]){
// 			li = 3
// 		}
// 		do{

// 		}while()
// 	}
// 	console.log(li)
// })
btnd.addEventListener('click', function(){
	Next();
});

btnL.addEventListener('click', function(){
	Prev();
});