function sumIntervals(intervals) {
    let total = 0;

    for (let i = 0; i < intervals.length; ++i) {
        if(intervals[i] === null) {
            continue;
        }

        let min1 = intervals[i][0];
        let max1 = intervals[i][1];

        for (let j = i + 1; j < intervals.length; ++j) {
            if(intervals[j] === null) {
                continue;
            }

            const min2 = intervals[j][0];
            const max2 = intervals[j][1];
            let remove = false;

            if(max2 > max1) {
                max1 = max2;
                remove = true;
            }

            if(min2 < min1) {
                min1 = min2;
                remove = true;
            }

            if(remove) {
                intervals[j] = null;
            }
        }

        total += max1 - min1;
    }


    return total;
}


console.log(sumIntervals([[1, 5], [10, 20], [1, 6], [16, 19], [5, 11]])) // 19
