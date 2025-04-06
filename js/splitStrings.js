function splitStrings(str){

    return str.split("").reduce((acc, curr, index)=> {
        if(index % 2 === 0) {
            if(index + 1 === str.length) {
                curr += '_'
            }

            acc.push(curr);
        } else {
            acc.push(acc.pop() + curr);
        }

        return acc;
    }, []);
}

console.log(splitStrings("abcdefee")) // ["ab", "cd", "ef"]