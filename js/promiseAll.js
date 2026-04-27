async function promiseAll(iterable) {

    return new Promise((resolve, reject) => {
        if(!iterable?.length) {
            resolve([]);
            return;
        }

        const res = new Array(iterable.length);
        let unresolved = iterable.length;


        for(let i = 0; i< iterable?.length; ++i) {
            Promise.resolve(iterable[i]).then(
                (value) => {
                    res[i] = value;
                    unresolved -= 1;

                    if(unresolved === 0) {
                        resolve(res);
                    }
                },reject
            );
        }
    });
}

const p0 = Promise.resolve(2);
const p1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(3);
    }, 10);
});
try {
    console.log(await promiseAll([p0, p1]));
} catch (error) {
    console.log(error); // 3
}
