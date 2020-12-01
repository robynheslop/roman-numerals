const calculateIValues = number => {
    let I = "";
    for (let i = 0; i < number; i++) {
        I += "I"
    }
    return I;
}


const generalRomanNumerals = (number) => {
    let romanNumerals = "";
    if (number / 5 >= 1) {
        romanNumerals += "V";
        romanNumerals += calculateIValues(number % 5)
    } else {
        romanNumerals += calculateIValues(number)
    }

    return romanNumerals;
}

export default generalRomanNumerals;