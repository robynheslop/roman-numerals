const totalIValues = number => {
    let returnString = ''; 
    for (let i = 0; i < number; i++) {
        returnString += "I"
    }
    return returnString;
}

const calculateLastDigit = number => {
    if (number === 4) return "IV";
    if (number === 9) return "IX";
    let returnString = "";
    if (number >= 5) {
        returnString += "V";
        returnString += totalIValues(number % 5);
        return returnString;
    }
    returnString += totalIValues(number);
    return returnString;
}

const generateRomanNumerals = (number) => {
    let romanNumerals = "";
    if (number / 10 >= 1) {
        for (let i = 0; i < (Math.floor(number / 10)); i++) { 
            romanNumerals += "X";
        }
        romanNumerals += calculateLastDigit(number % 10)
    } else {
        romanNumerals += calculateLastDigit(number);
    }
    return romanNumerals;
}

export default generateRomanNumerals;