function showResult() {
    var str = document.getElementById("stringInput").value;
    // alert(str);
    var select = document.getElementById("operation");
    var op = select.selectedIndex;
    // alert(op);
    var result;

    switch (op) {
        case 0: // length - eturns the number of characters in the string, including spaces and punctuation.
            result = str.length;
            // alert(result);
            break;
        case 1: // indexOf - used to find the index of the first occurrence of a specified substring within a string.
            var s = prompt("Enter the string to find index");
            result = str.indexOf("world");
            // alert(result);
            break;
        case 2: // split - used to split a string into an array of substrings based on a specified separator.
            result = str.split("");
            break;
        case 3: // charAt - returns the character at a specified index in a string
            index = parseInt(prompt("Enter the index"));
            result = str.charAt(index);
            break;
        case 4: // match - to find the string which matches the given pattern
            var result = str.match(/r.*?n/ig);
            break;
        case 5: // replace - to replace occurrences of a substring within a string with another substring. 
            svalue = prompt("Enter string to replace with");
            result = str.replace(/s.*?n/i, svalue);
            break
        case 6: // search - to find the position where the pattern matches
            var result = str.search(/p.*?n/ig);
            break;
        case 7: // upper case
            result = str.toUpperCase();
            break;
        case 8:// lower case
            result = str.toLowerCase();
            break;
        case 9:  // slice - to extract a section of a string and returns a new string without modifying the original string. 
            // You can specify the start and end index to define the portion of the string to extract. 
            // The start index is inclusive, and the end index is exclusive.
            start = parseInt(prompt("Enter start index"));
            end = parseInt(prompt("Enter end index"));
            result = str.slice(start, end);
            break;
        case 10: // concat - is used to concatenate two or more strings, creating a new string without modifying the original strings.
            var str1 = prompt("Enter string to concatenate");
            result = str.concat(" ", str1);
            break;
        case 11: // includes -  is used to check whether a string contains another string or not. 
            var str2 = prompt("Enter string to check if present in given string ");
            result = str.includes(str2);
            break;
    }

    document.getElementById("result").value = result;


}