'use strict'; 

$(window).resize(function(){
	location.reload();
});




function addListener(){
	
	/*[...document.querySelectorAll('.accordion-trigger')].forEach(function(btn) {
		btn.addEventListener('click', function() {
			const exp= btn.getAttribute('aria-expanded');
			if(exp==='true'){
				btn.setAttribute('aria-expanded','false');
			}else{
				btn.setAttribute('aria-expanded','true');
			}
		});
	});*/
	
}

$(window).on('load',function(){
    addListener();
	const navbar= document.getElementById('navbarCollapse');

	$("#menubutton").on("click", function(){
        //menu is collapsed/closed, toggle open/close icon.
		/*if($('#open').hasClass('hidden')){
			$('#open').removeClass('hidden');
			$('#close').addClass('hidden');
			$('#nav').removeClass('custom-nav');
		}else{
			$('#open').addClass('hidden');
			$('#close').removeClass('hidden');
			$('#nav').addClass('custom-nav');
		}*/
		$('#open').toggleClass('hidden');
		$('#close').toggleClass('hidden');
		$('#nav').toggleClass('custom-nav');
		document.querySelector('#navbarCollapse').classList.toggle("hidden");
		navbar.toggleAttribute('aria-expanded');
    });
	
	/*$(data.subscribe).on('click',function(){
		dataFailed();
	});*/
    //User has pressed the keyboard ,and entered some data in the input field
    //data.email.addEventListener('keyup',keyUp);
    //data.email.addEventListener('keypress',keyPress);

    /*data.subscribe.addEventListener('click',(e)=>{
        e.preventDefault();
		keyPress(e);
	})
	*/
});
