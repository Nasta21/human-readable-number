 function toReadable (number) {
    let result = '';
    let num = number.toString();
    let tens = '';
    let hundreds;
    let i = num.length() - 1;
    if (number === 0) {
        result = 'zero';
}   else  if (num[i - 1] !== '1') {
    switch (num[i]) {
        case '1':
            result = 'one'
            break;
        case '2':
            result = 'two'
            break;
        case '3':
            result = 'three'
            break;
        case '4':
            result = 'four'
            break;
        case '5':
            result = 'five'
            break;
        case '6':
            result = 'six'
            break;
        case '7':
            result = 'seven'
            break;
        case '8':
            result = 'eight'
            break;
        case '9':
            result = 'nine'
            break;
        case '0':
            result = ''
            break;
    }
    //end of ones, named result
    //start of tens
    
    switch (num[i-1]) {
        case '2':
            tens = 'twenty'
            break;
        case '3':
            tens = 'thirty'
            break;
        case '4':
            tens = 'fourty'
            break;
        case '5':
            tens = 'fifty'
            break;
        case '6':
            tens = 'sixty'
            break;
        case '7':
            tens = 'seventy'
            break;
        case '8':
            tens = 'eighty'
            break;
        case '9':
            tens = 'ninety'
            break;
        case '0':
            tens = ''
            break;
    }
    result = (result) ? `${tens} ${result}` : `${tens}`;//putting together ones and tens
}
   else if (num[i - 1] === '1') {//teens
    switch (`${num[i-1]}${num[i]}`) {
        case '10':
            result = 'ten'
            break;
        case '11':
            result = 'eleven'
            break;
        case '12':
            result = 'twelve'
            break;
        case '13':
            result = 'thirteen'
            break;
        case '14':
            result = 'fourteen'
            break;
        case '15':
            result = 'fifteen'
            break;
        case '16':
            result = 'sixteen'
            break;
        case '17':
            result = 'seventeen'
            break;
        case '18':
            result = 'eighteen'
            break;
        case '19':
            result = 'nineteen'
            break;
    }
}
if (num.length === 3) {
    switch (num[i-2]) {
        case '1':
            hundreds = 'one hundred'
            break;
        case '2':
            hundreds = 'two hundred'
            break;
        case '3':
            hundreds = 'three hundred'
            break;
        case '4':
            hundreds = 'four hundred'
            break;
        case '5':
            hundreds = 'five hundred'
            break;
        case '6':
            hundreds = 'six hundred'
            break;
        case '7':
            hundreds = 'seven hundred'
            break;
        case '8':
            hundreds = 'eight hundred'
            break;
        case '9':
            hundreds = 'nine hundred'
            break;
    }
    result = (result) ? `${hundreds} ${result}` : hundreds;
}  
 return result; 
}
