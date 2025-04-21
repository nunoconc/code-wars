const numbersMap = {
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9,
    "ten": 10,
    "eleven": 11,
    "twelve": 12,
    "thirteen": 13,
    "fourteen": 14,
    "fifteen": 15,
    "sixteen": 16,
    "seventeen": 17,
    "eighteen": 18,
    "nineteen": 19,
    "twenty": 20,
    "thirty": 30,
    "forty": 40,
    "fifty": 50,
    "sixty": 60,
    "seventy": 70,
    "eighty": 80,
    "ninety": 90,
}

const multiplierNumbers = {
    "and": {
        type: "one",
        value: 1,
    },
    "hundred": {
        type: "one",
        value: 100,
    },
    "thousand": {
        type: "all",
        value: 1000,
    },
    "million": {
        type: "all",
        value: 1000000,
    },
}

function parseInt(string) {
    const words = string.split(/[\s\-]/);

    return words.reduce((acc, curr, index) => {
        const number = numbersMap[curr];

        // case number to sum
        if(number) {
            // add number to sum, waiting for possible multiplier
            acc.numberSum += number;

            // in case last index, sum to end result and reset numberSum
            if(index === words.length - 1) {
                acc.result += acc.numberSum;
                acc.numberSum = 0;
            }

            return acc;
        }

        const multiplier = multiplierNumbers[curr];

        // case multiplier to multiply
        if(multiplier) {

            // case a one multiplier multiply by the current numberSum and sum to the result
            if(multiplier.type === "one") {
                acc.result += acc.numberSum * multiplier.value;
            }

            // in this case we want to multiply by the all result, first sum the numberSum and then multiply all
            if(multiplier.type === "all") {
                acc.result += acc.numberSum;
                acc.result *= multiplier.value;
            }

            // both cases reset numberSum
            acc.numberSum = 0;

            return acc;
        }

        return acc;
    }, {
        result: 0,
        multipliers: 1,
        numberSum: 0
    }).result;
}


// Test cases

 console.log(parseInt("sixty-six")) // 66
 console.log(parseInt("six hundred sixty-six")) // 666;
 console.log(parseInt("six hundred sixty-six ")) // 666;
 console.log(parseInt("two hundred forty-six")); // 246
 console.log(parseInt("one thousand three hundred thirty-seven")); // 1337
 console.log(parseInt("twenty-six thousand three hundred fifty-nine")); // 26359
console.log(parseInt("six hundred sixty-six thousand six hundred sixty-six")); // 666666
