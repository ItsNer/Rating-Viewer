let emoji = document.querySelector('.emoji');
let rating = document.querySelector('.rating-names');
let star = document.querySelectorAll('.star-emoji')


star.forEach(function(stars,index){
	stars.addEventListener('click',function(){
		for(let i = 0; i <= index; i++){
			star[i].style.color = 'gold';
		}

		// jika index = 0 maka sangat buruk
		if(index === 0){
			emoji.style.transform = 'translateX(200px)';
			rating.style.transform = 'translateY(0px)';
		}

		// jika index = 1 maka  buruk
		if(index === 1){
			emoji.style.transform = 'translateX(100px)';
			rating.style.transform = 'translateY(-30px)';
		}

		// jika index = 2 maka cukup
		if(index === 2){
			emoji.style.transform = 'translateX(0px)';
			rating.style.transform = 'translateY(-60px)';
		}

		// jika index = 3 maka baik
		if(index === 3){
			emoji.style.transform = 'translateX(-100px)';
			rating.style.transform = 'translateY(-90px)';
		}

		// jika index = 4 maka sangat baik
		if(index === 4){
			emoji.style.transform = 'translateX(-200px)';
			rating.style.transform = 'translateY(-120px)';
		}

	});

});



