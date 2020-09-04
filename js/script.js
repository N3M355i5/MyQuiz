function valForm() {
	var radios = document.getElementsByName("quiz");
	var boxes = document.getElementsByName("lang");
	var drop = document.getElementsByName("gender");
	var formValid = false;
	var radioValid = false;
	var boxValid = false;
	var dropValid = false;
	
	var i = 0;
	while (!radioValid && i< radios.length) {
		if (radios[i].checked) radioValid = true;
		i++;
	}
	if(!radioValid) alert("Please Select a Company!");
	while (!boxValid && i < boxes.length) {
		if (radios[i].checked) boxValid = true;
		j++;
	}
	if(!boxValid) alert('Please select a language!');
	if (drop.value = "0") {
		alert("Please select a Gender!");
		dropValid = true;
	}
	if(radioValid || boxValid || dropValid) formValid = false;
	return formValid;
}