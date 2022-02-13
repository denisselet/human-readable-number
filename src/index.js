module.exports = function toReadable (number) {
    if (number === 0) {
        return 'zero';
    }
    if (number === 1000) {
        return "one thousand";
    }
    let arr = ["", "one", 'two', "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", ""];
    let arr2 = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
     let c = [];
    String(number).split('').reverse();
    if (Math.floor(number / 100) > 0) {
        c.push(arr[Math.floor(number / 100)]);
        c.push('hundred');
    }
    if(number%100 < 21) {
        if (number%100 !== 0) {
            c.push(arr[number%100]);
        }
    }
    if (number%100 > 20) {
        c.push(arr2[Math.floor(number%100/10)]);
        if((number%100)%10 !== 0) {
            c.push(arr[(number%100)%10]);
        }
    }
    return c.join(' ');
};
