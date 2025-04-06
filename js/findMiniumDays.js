function findMinimumDays(durations) {

    const sorted = durations.sort((a,b) => b-a);
    const sums = [];

    sums.push(1);
    for(let i = 0; i < sums.length; ++i) {
        sums[i] += sorted[i];

        for(let j = i + 1; j < sorted.length; ++j) {
            if( sums[i] + sorted[j] <= 3) {
                sums[i] = sums[i] + sorted[j];
                sorted[j] = 4;
            }
        }
    }

    return sums.filter((a) => a > 0).length;
}


console.log(findMinimumDays([1.9, 1.1, 1.5, 0.1]))
