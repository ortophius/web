export namespace Utils {
  export function isBetween(num: number, firstNum: number, secondNum: number) {
    const min = Math.min(firstNum, secondNum);
    const max = Math.max(firstNum, secondNum);

    const res = (num >= min) && (num <= max);
    return res;
  }
}
