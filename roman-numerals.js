const totalIValues = number => {
    let returnString = '';
    for (let i = 0; i < number; i++) {
        returnString += "I"
    }
    return returnString;
}

const totalXValues = number => {
    let returnString = '';
    for (let i = 0; i < number; i++) {
        returnString += "X"
    }
    return returnString;
}

const totalCValues = number => {
    let returnString = '';
    for (let i = 0; i < number; i++) {
        returnString += "C"
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
    return totalIValues(number);
}

const calculateSecondLastDigit = number => {
    if (number === 4) return "XL";
    if (number === 9) return "XC";
    let returnString = "";
    if (number >= 5) {
        returnString += "L";
        returnString += totalXValues(number % 5);
        return returnString;
    }
    return totalXValues(number);
}

const calculateThirdLastDigit = number => {
    if (number === 4) return "CD";
    if (number === 9) return "CM";
    let returnString = "";
    if (number >= 5) {
        returnString += "D";
        returnString += totalCValues(number % 5);
        return returnString;
    }
    return totalCValues(number);
}

const generateRomanNumerals = (number) => {
    let romanNumerals = "";
    if (number / 100 >= 1) {
        romanNumerals += calculateThirdLastDigit(Math.floor(number / 100));
        romanNumerals += calculateSecondLastDigit(Math.floor((number % 100) / 10));
        romanNumerals += calculateLastDigit((number % 100) % 10)
    } else if (number / 10 >= 1) {
        romanNumerals += calculateSecondLastDigit(Math.floor(number / 10))
        romanNumerals += calculateLastDigit(number % 10)
    } else {
        romanNumerals += calculateLastDigit(number);
    }
    return romanNumerals;
}

export default generateRomanNumerals;