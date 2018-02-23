export const scaleBetween = (arr, scaledMin, scaledMax) => {
    const min = Math.min(arr);
    const max = Math.max(arr);
    if (max === min) {
        return arr.map((el) => (min + max) /2)
    }
    return arr.map((num) => (scaledMax-scaledMin)*(num-min)/(max-min)+scaledMin);
}

export const randomBetween = (min, max) => {
    return Math.random() * (max - min) + min;
}