


/* Составьте программу, выводящую на экран квадраты чисел от 10 до 20 включительно.*/

function square(x) {

	for (var x = 10; x <= 20; x++) {
	
		var sqr = Math.pow(x, 2);
		alert("sqr = "+ sqr);
		console.log("sqr = "+ sqr); 	
	}

}	



/* Даны натуральные числа от 35 до 87. Вывести на консоль те из них, которые при делении на 7 дают остаток 1, 2 или 5.*/
	
function integers() {
	for (var i = 35; i <= 87; i++) {
		var integ = i % 7;
		if (integ === 1 || integ === 2 || integ === 5) {
			console.log(i);
		}	
	}
}


/* Найдите сумму 1+2+3+…+n, где число n вводится пользователем с клавиатуры.*/

function summ() {
	var n = prompt("Enter: ");
	var sum = 0;
	for (var i = 1; i <= n; i++) {
		sum += i;
	}
	console.log(sum); 
}

/* Найдите количество четных цифр данного натурального числа.*/

function evenNumbers() {
	var number = prompt("Enter number");
	var qty = 0;
	for (var i = 0; i < number.length; i++) {
		if (number[i] % 2 == 0) {
		qty++;
		} 
	} 
	console.log (qty);
}

/* Найдите наибольшую цифру данного натурального числа.*/

 function greatestNumber() {
 	var number = prompt("Enter number");
 	var max = (number.charAt(0));
 	for (var i = 0; i <= number.length; i++) {
 		var min = number.charAt(i)
		if (max > min) {
			min = number.charAt(i + 1);
		} else {
			max = min;
		}
	} 
	console.log(max);
}
/*function greatestNumber() {
  var number = prompt("Enter number");
  var max = parseInt(number.charAt(0)); // вот так
  for (var i = 1; i <= number.length; i++) { 
    var current = parseInt(number.charAt(i));
    if (max < current) {
        max = current;
    }
  } 
  console.log(max);
}  

Необходимо суммировать все нечётные целые числа в диапазоне, который введёт пользователь с клавиатуры. */

function summOddNumbers() {
	var first = prompt("Enter number");
	var last = prompt("Enter number");
	var summ = 0;
	for (var i = first; i <= last; i++) {
	 if (i % 2) {
	 	summ += i;
	 }
	}
	console.log(summ);
}

/*Вывести среднее арифметическое диапазона введенного пользователем:*/

function averageValue() {
	var first = +prompt("Enter number");
	var last = +prompt("Enter number");
	var summ = 0;
	var  result = 0;
	var iter = last - first + 1;
	for (var i = first; i <= last; i++) {
		summ += i;			
	}
	result = summ / iter;
	console.log(result);
}

/* Напечатать квадрат NxN введенного пользователем. Символ и есть N*/

function n() {
	var n = prompt("Enter number");
	for (var i = 0; i < n; i++) {
		for (var j = 0; j < n; j++) {
			document.write(n);
		}
		document.write("<br \/>");
	}
}

/*Преобразовать его в другое число, цифры которого будут следовать в обратном порядке по сравнению с введенным числом.*/

function getNumber() {
	var number = prompt("Enter number");
	var newNum = ""; 
	for (var i = number.length - 1; i >= 0; i--) {
		newNum = newNum + number.charAt(i);
		console.log(newNum);
	}
}


/*Вывести пирамидку до числа введеного пользователем */

function getFigure() {
	var number = prompt("Enter number");
	for (var i = 1; i <= number; i++) {
		for (var j = 1; j <= i; j++) {
		document.write(i);	
		}
		document.write("<br \/>");
	}
}


/*Вывести пирамидку диапазона, заданного пользователем*/ 

function getFigureWithRange() {
	var first = prompt("Enter number");
	var last = prompt("Enter number");
	for (var i = first; i <= last; i++) {
		for (var j = 1; j <= i; j++) {
		document.write(i);	
		}
		document.write("<br \/>");
	}
}

/* Вывести пирамиду с шагом: */


function getFigureWithStep() {
	var number = prompt("Enter number");
	var step = prompt("Enter number");
	for (var i = 1; i <= number; i+=step) {
		for (var j = 1; j <= i; j++) {
		document.write(i);	
		}
		document.write("<br \/>");
	}
}


/* Нарисовать равнобедренный треугольник из символов ^. Высоту выбирает пользователь. Например: высота = 5, на экране */

function getFigureTriangle() {
	var number = prompt("Enter number");
}

