document.querySelector('.MenuDesplegable').addEventListener('click', (e) => {
	if (e.target.classList.contains('btnm')) {
		document.querySelector('.sombra').classList.add('sombras');
	}
	else if(e.target.classList.contains('X') || e.target.classList.contains('sombra') || e.target.classList.contains('enlace')) {
		let ul = document.querySelector('.sombra ul');
		ul.style.transform = 'translateX(-15rem)';
		document.querySelector('.sombra').style.opacity = '0';
		setTimeout(function(){
			ul.style.transform = 'translateX(0)';
			document.querySelector('.sombra').style.opacity = '1';
			document.querySelector('.sombra').classList.remove('sombras');
		},500)
	}
})