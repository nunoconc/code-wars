function debounce(func, wait) {
    let isRunning = false;

    return (...args) => {
        if(isRunning) {
            return;
        }

        isRunning = true;

        setTimeout((() => {
            func(...args);
            isRunning = false;
        }), wait);
    }
}



let i = 21;
const increment = debounce((a, b) => {
    i += a * b;
}, 10);

increment(3, 7);
increment(10, 5);

setTimeout(() => {
    console.log(i); // 42
}, 100);


Array.prototype


const a = {
    a: true,
    b: false,
}

console.log(Object.entries(a));
