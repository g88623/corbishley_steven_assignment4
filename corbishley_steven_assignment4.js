// Steven Corbishley
// SDI 1307
// Project 4
// My SDI Project 4 JavaScript file.



var myLibrary = function(){

	// Strings

	var checkPhone = function(val){
		var strLen = val.length;
		if(strLen == 12){

			for (var i=0; i < strLen; i++){
				var str = val.substring(i,i+1);
				if(i==3 || i==7){
					if(str != "-"){
						return "first false";
					}
				} else {
					if(str!="0" || str!="1" || str!="2" || str!="3" || str!="4" || str!="5" || str!="6" || str!="7" || str!="8" || str!="9") {
						return "second false";
					}
				}
			}

		} else {
			return false;
		}
	}; // Is the string a phone number (123-456-7890)
/*
	// Is the string an email address (abc@bbb.ccc, with only one @ and at least one . after @)
	// Is the string a URL (https: or http:)
	// Title-case string (split into words, then uppercase the first letter of each word)
	// Given a string that is a list of things separated by a given string, as well as another string separator, return a string with the first separator changed to the second: "a,b,c" + "," + "/" → "a/b/c".

	// Number

	// Format a number to use a specific number of decimal places, as for money: 2.1 > 2.10
	// Fuzzy-match a number: is the number above or below a number within a certain percent?
	// Find the number of hours or days difference between two dates.
	// Given a string version of a number such as "42", return the value as an actual Number, such as 42.

	// Array

	// Find the smallest value in an array that is greater than a given number
	// Find the total value of just the numbers in an array, even if some of the items are not numbers.
	// Given an array of objects and the name of a key, return the array sorted by the value of that key in each of the objects: "a" + [{a:2},{a:3},{a:1}] → [{a:1},{a:2},{a:3}].
*/
	return {
		"checkPhone": checkPhone
	}; // Return Object
}; // End of myLibrary

// Function calls

var newLibrary = new myLibrary();

console.log("Is 123-456-7890 a phone number: " + newLibrary.checkPhone("123-456-7890"));