var handleClick = function(event){
	console.log(window.event);
	var choice = window.event.target.id;
	console.log(choice) 
	var number1 = document.getElementById("FirstNum").value;
	var number2 = document.getElementById("SecondNum").value;
	var parsedNumber1 = parseFloat (number1);
	var parsedNumber2 = parseFloat (number2);
	if (choice == "addition") {
		operation = " + "; 
		answer = parsedNumber1 + parsedNumber2;
	}	else if(choice =="subtraction"){
		operation = " - "; 
		answer = parsedNumber1 + parsedNumber2;
	}	else if(choice == "multiplication"){
		operation = " * "; 
		answer = parsedNumber1 + parsedNumber2;	
	}	else if (choice == "division"){
		operation = " / "; 
		answer = parsedNumber1 + parsedNumber2;
	}
	var answersArea = document.getElementById("answers");
	answersArea.innerHTML = number1 + " + " + number2 + " = " + answer; 
	//document.write(); 	
}
