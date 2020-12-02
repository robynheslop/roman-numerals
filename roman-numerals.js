const calculateLastDigit = number => {
    if (number === 4) {
        return "IV"
    }
    if (number === 9) {
        return "IX"
    }
    let returnString = "";
    if (number >= 5) {
        returnString += "V"
        for (let i = 0; i < (number % 5); i++) {
            returnString += "I"
        }
        return returnString;
    }
    for (let i = 0; i < number; i++) {
        returnString += "I"
    }
    return returnString;
}

const generalRomanNumerals = (number) => {

    let romanNumerals = "";
    if (number / 10 >= 1) {
        romanNumerals += "X";
        romanNumerals += calculateLastDigit(number % 10)
    } else {
        romanNumerals += calculateLastDigit(number);
    }

    return romanNumerals;
}

export default generalRomanNumerals;