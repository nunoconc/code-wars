// Sum and Rest the Number with its Reversed and See What Happens
const memoRev = () => {
    const revs = {};

    return (n) => {
        if (!revs[n]) {
            revs[n] = parseInt(n.toString().split('').reverse().join(''));
        }

        return revs[n];

    }
}

const memoDif = () => {
    const subs = {};

    return (one, two) => {

        let first = one;
        let second = two;

        if (two > one) {
            first = two;
            second = one;
        }

        if (!subs[first] || !subs[first][second]) {
            subs[first] = {};
            subs[first][second] = first - second;
        }

        return subs[first][second];

    }
}

const memoSum = () => {
    const sums = {};

    return (first, second) => {

        if (!sums[first] || !sums[first][second]) {
            sums[first] = {};
            sums[first][second] = first + second;
        }

        return sums[first][second];

    }
}

const memoDiv = () => {
    const divs = {};

    return (first, second) => {

        if (!divs[first] || !divs[first][second]) {
            divs[first] = {};
            divs[first][second] = first % second === 0;
        }

        return divs[first][second];

    }
}

const memoSumDifRevHelper = () => {
    const rev = memoRev();
    const sum = memoSum();
    const dif = memoDif();
    const div = memoDiv();
    const results = {};

    return (n) => {
        if (!results[n]) {
            const resultRev = rev(n);
            const resultSum = sum(n, resultRev);
            const resultDif = dif(n, resultRev);
            results[n] = div(resultSum, resultDif);
        }

        return results[n];

    }
}

const memoSumDifRev = () => {
    const sumDifRevHelper = memoSumDifRevHelper();
    const results = {}

    return (n) => {
        if(!results[n]) {
            for (let i = 0, j = 0; i < n; ++j) {
                if (sumDifRevHelper(j) && j % 10 !== 0) {
                    results[++i] = j;
                }
            }
        }

        return results[n];
    }
}



const sumDifRev = memoSumDifRev();
console.log(sumDifRev(100));
console.log(sumDifRev(99));
console.log(sumDifRev(98));
console.log(sumDifRev(97));

/*
9349065
9019098
8909109
8029197
 */
