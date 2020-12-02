const generateNumeral = input => {
    if (input < 1 || input > 3999) return "Error: Please enter a number between 1 and 3999";
    var mapping = [
        { numeral: 'M', value: 1000 },
        { numeral: 'CM', value: 900 },
        { numeral: 'D', value: 500 },
        { numeral: 'CD', value: 400 },
        { numeral: 'C', value: 100 },
        { numeral: 'XC', value: 90 },
        { numeral: 'L', value: 50 },
        { numeral: 'XL', value: 40 },
        { numeral: 'X', value: 10 },
        { numeral: 'IX', value: 9 },
        { numeral: 'V', value: 5 },
        { numeral: 'IV', value: 4 },
        { numeral: 'I', value: 1 },
    ];
    var output = '';
    mapping.forEach(item => {
        while (input >= item.value) {
            output += item.numeral;
            input -= item.value;
        }
    })
    return output;
}

export default generateNumeral;