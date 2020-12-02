const loopOverCharacter = (number, value) => {
    let returnString = '';
    for (let i = 0; i < number; i++) {
        returnString += value
    }
    return returnString;
}

const calculateDigit = (number, digit) => {
    switch (digit) {
        case 1:
            if (number === 4) return "IV";
            if (number === 9) return "IX";
            let digit1String = "";
            if (number >= 5) {
                digit1String += "V";
                digit1String += loopOverCharacter(number % 5, "I");
                return digit1String;
            }
            return loopOverCharacter(number, "I");
        case 10:
            if (number === 4) return "XL";
            if (number === 9) return "XC";
            let digit10String = "";
            if (number >= 5) {
                digit10String += "L";
                digit10String += loopOverCharacter(number % 5, "X");
                return digit10String;
            }
            return loopOverCharacter(number, "X");
        case 100:
            if (number === 4) return "CD";
            if (number === 9) return "CM";
            let digit100String = "";
            if (number >= 5) {
                digit100String  += "D";
                digit100String  += loopOverCharacter(number % 5, "C");
                return digit100String ;
            }
            return loopOverCharacter(number, "C");
        case 1000:
            return loopOverCharacter(number, "M");
    }

}

const generateRomanNumerals = (number) => {
    if (number < 1 || number > 3999) return "Error: Please enter a number between 1 and 3999";
    let romanNumerals = "";
    if (number / 1000 >= 1) {   
        romanNumerals += calculateDigit(Math.floor(number / 1000), 1000);
        romanNumerals += calculateDigit(Math.floor((number % 1000) / 100), 100);
        romanNumerals += calculateDigit(Math.floor(((number % 1000) % 100) / 10), 10);
        romanNumerals += calculateDigit((((number % 1000) % 100) % 10), 1)
    } else if (number / 100 >= 1) {
        romanNumerals += calculateDigit(Math.floor(number / 100), 100);
        romanNumerals += calculateDigit(Math.floor((number % 100) / 10), 10);
        romanNumerals += calculateDigit(((number % 100) % 10), 1)
    } else if (number / 10 >= 1) {
        romanNumerals += calculateDigit((Math.floor(number / 10)), 10)
        romanNumerals += calculateDigit((number % 10), 1)
    } else {
        romanNumerals += calculateDigit(number, 1);
    }
    return romanNumerals;
}

export default generateRomanNumerals;