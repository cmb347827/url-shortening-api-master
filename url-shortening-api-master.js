'use strict'; 

$(window).resize(function(){
	location.reload();
});

const data={
	input: document.getElementById('url'),
	url:document.getElementById('get_url'),
    urlReg: /https:\/\/(\w{1,}\.){1,}\w{1,}/,
}
const getInput=(event)=>{
	
}

function addListener(){
	data.url.addEventListener('click',getInput);
	
	
}

$(window).on('load',function(){
    addListener();
	const navbar= document.getElementById('navbarCollapse');

	$("#menubutton").on("click", function(){
        //menu is collapsed/closed, toggle open/close icon.
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
