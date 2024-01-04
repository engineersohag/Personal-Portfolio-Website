
// ----- About Section -------

var tablinks = document.getElementsByClassName("tab-links");
var tabconents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
	for(tablink of tablinks){
		tablink.classList.remove("active-link");
	}
	for(tabconent of tabconents){
		tabconent.classList.remove("active-tab");
	}
	event.currentTarget.classList.add("active-link");
	document.getElementById(tabname).classList.add("active-tab");
}


// ------- Menu Section ---------

var sideMenu = document.getElementById('sidemenu');

function openmenu(){
	sideMenu.style.right = "0";
}

function closemenu(){
	sideMenu.style.right = "-200px";
}

// --- Contact From ---

 const scriptURL = 'https://script.google.com/macros/s/AKfycbzyPFNwnnQuKALaJ2rj6Oaf6bEPEGR136_3jDNDwN3o1MeON0NLp8IA7SSRow7bb8pV/exec'
  const form = document.forms['submit-to-google-sheet']

  const msg = document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
      	msg.innerHTML = "Message sent successfully";
      	setTimeout(function() {
      		msg.innerHTML = "";
      	}, 5000)
      	form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })