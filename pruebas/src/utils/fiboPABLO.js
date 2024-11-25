export const fibonacci = (pos) => {
    const fib = [0, 1];
    for (let i = 2; i <= pos; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]; 
    }
    return fib[pos];
};
