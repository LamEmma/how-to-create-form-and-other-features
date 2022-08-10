function loadDataAndCalculatePrice() {
	var name = document.getElementById('confirm_name');
	var email = document.getElementById('confirm_email');
	var phone = document.getElementById('confirm_phone');
	var age = document.getElementById('confirm_age');
	var total = document.getElementById('confirm_total');
	
	var payment = document.getElementById('confirm_payment');
	payment.textContent = sessionStorage.payment; 


	lastname = sessionStorage.getItem('lastname');
	name.textContent = sessionStorage.firstname + ' ' + sessionStorage.lastname;
	email.textContent = sessionStorage.email;
	phone.textContent = sessionStorage.phone;
	age.textContent = sessionStorage.age;

	var occupation = document.getElementById('confirm_occupation');
	occupation.textContent = sessionStorage.occupation; 

	var courses = document.getElementById('confirm_courses');
	var yourCourses = '';
	var totalPrice =0;
	if (sessionStorage.logicmath == 'true') {
		totalPrice += 449;
		yourCourses += 'logicmath, ';
	}
	if (sessionStorage.pythonbasic == 'true') {
		totalPrice += 799;
		yourCourses += 'pythonbasic, ';
	} 
	if (sessionStorage.webbasic == 'true') {
		totalPrice += 749;
		yourCourses += 'webbasic, ';
	}
	if (sessionStorage.gamepython == 'true') {
		totalPrice += 149;
		yourCourses += 'gamepython, ';
	}
	if (sessionStorage.aibasic == 'true') {
		totalPrice += 449;
		yourCourses += 'aibasic, ';
	}
	if (sessionStorage.datascience == 'true') {
		totalPrice += 249;
		yourCourses += 'datascience, ';
	} 
	yourCourses = yourCourses.substring(0, yourCourses.length - 2);
	courses.textContent = yourCourses;
	total.textContent = totalPrice;

} 


function cancelButton() {
	window.location = 'register.html';
}



function init() {
	loadDataAndCalculatePrice();
	var cancel = document.getElementById('cancelButton');
	cancel.onclick = cancelButton;
}

window.onload = init;




