function saveData() {
	var firstname = document.getElementById('firstname').value;
	var lastname = document.getElementById('lastname').value;
	var age = document.getElementById('lastname').value;
	var email = document.getElementById('email').value;
	var phone = document.getElementById('phone').value;
	var age = document.getElementById('age').value;
	sessionStorage.firstname = firstname; 
	sessionStorage.setItem('lastname', lastname);
	sessionStorage.email = email;
	sessionStorage.phone = phone;
	sessionStorage.age = age;	

	var occupationArray = document.getElementById('radio_occupation').getElementsByTagName('input');
	for (i=0; i < occupationArray.length; i++) {
		if (occupationArray[i].checked == true) {
			sessionStorage.occupation = occupationArray[i].value;
		} 
	}

	var logicmath = document.getElementById('logicmath').checked;
	var pythonbasic = document.getElementById('pythonbasic').checked;
	var webbasic = document.getElementById('webbasic').checked;
	var gamepython = document.getElementById('gamepython').checked;
	var datascience = document.getElementById('datascience').checked;
	var aibasic = document.getElementById('aibasic').checked;

	sessionStorage.logicmath = logicmath ;
	sessionStorage.pythonbasic = pythonbasic; 
	sessionStorage.webbasic = webbasic;
	sessionStorage.gamepython = gamepython; 
	sessionStorage.datascience = datascience;
	sessionStorage.aibasic = aibasic;

	var payment = document.getElementById('payment').value; 
	sessionStorage.payment = payment; 

}

function prefillData() {
	if (sessionStorage.firstname != null) {
		document.getElementById('firstname').value = sessionStorage.firstname;
		document.getElementById('lastname').value = sessionStorage.lastname;
		document.getElementById('phone').value = sessionStorage.phone;
		document.getElementById('email').value = sessionStorage.email;
		document.getElementById('age').value = sessionStorage.age;
		switch (sessionStorage.occupation) {
			case 'highschool':
				document.getElementById('highschool').checked = true;
				break;
			case 'university':
				document.getElementById('university').checked = true;
				break;
			case 'working':
				document.getElementById('working').checked = true;
				break;
			case 'retired':
				document.getElementById('retired').checked = true;
				break;
		}
		if (sessionStorage.logicmath == 'true') {
			document.getElementById('logicmath').checked = true;
		}
		if (sessionStorage.pythonbasic == 'true') {
			document.getElementById('pythonbasic').checked = true;
		}
		if (sessionStorage.webbasic == 'true') {
			document.getElementById('webbasic').checked = true;
		}
		if (sessionStorage.gamepython == 'true') {
			document.getElementById('gamepython').checked = true;
		}
		if (sessionStorage.aibasic == 'true') {
			document.getElementById('aibasic').checked = true;
		}
		if (sessionStorage.datascience == 'true') {
			document.getElementById('datascience').checked = true;
		}
		document.getElementById('payment').value = sessionStorage.payment; 
	}
}



function init() {
	var regForm = document.getElementById('registerForm');
	regForm.onsubmit = saveData;
	prefillData();
}

window.onload = init;