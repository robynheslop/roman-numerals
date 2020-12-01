const generalRomanNumerals = (number) => {
    let romanNumerals = "";
    for (let i = 0; i < number; i++) {
        romanNumerals += "I"
    }
    return romanNumerals;
}

export default generalRomanNumerals;