// utils/PabloMaxOfThree.js
export function PabloMaxOfThree(n1, n2, n3) {
    const a = n1;
    const b = n2;
    const c = n3;

    if (a > b && a > c) {
        return a;
    } else if (b > c) {
        return b;
    } else {
        return c;
    }
}
