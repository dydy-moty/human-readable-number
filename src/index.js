module.exports = function toReadable (number) {

    let arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six',
        'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
        'sixteen', 'seventeen', 'eighteen', 'nineteen',  'twenty'];

    let arr1 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred'];

    let arrNumber = number.toString().split('').map(Number);
    // 1-19
    if (number < 20) {
        return arr[number];
        // 21-99
    } else if ( number > 20 && number <= 99 && number % 10 !== 0) {
        return arr1[arrNumber[0]-2] + ' ' + arr[arrNumber[1]];
        // 20-99 --> 10,20,30
    } else if (number >= 20 && number < 99 && number % 10 === 0 ) {
        return arr1[arrNumber[0]-2];
        // 99-999 --> 100,200,300
    } else if (number > 99 && number % 100 === 0 ) {
        return  arr[arrNumber[0]] + ' ' + arr1[8];
        // 99-999 --> 120,130,140 without 110,210,310
    } else if (number > 99 && number % 10 === 0 && arrNumber[1] !== 1 ) {
        return arr[arrNumber[0]] + ' ' + arr1[8] + ' ' + arr1[arrNumber[1] - 2];
        // 99-999 --> 110,210,310
    } else if (number > 99 && number % 10 !== 0 && arrNumber[1] === 0) {
        return arr[arrNumber[0]] + ' ' + arr1[8] + ' ' + arr[arrNumber[2]];
        // 99-999 --> 111,213,317
    } else if (number > 99 && number % 100 !== 0 && arrNumber[1] === 1) {
        return arr[arrNumber[0]] + ' ' + arr1[8] + ' ' + arr[arrNumber[2] + 10];
        // 99-999 --> etc.
    } else {
        return arr[arrNumber[0]] + ' ' + arr1[8] + ' ' + arr1[arrNumber[1] - 2] + ' ' + arr[arrNumber[2]] ;
    }

}
