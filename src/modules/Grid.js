export const GenerateGridOfSizeXYWithDefault = (x, y, init) => {
    return Array(...Array(x)).map(() => Array(y).fill(init));
    //return Array(x).fill(init).map(() => Array(y));
};