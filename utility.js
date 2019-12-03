import * as fs from 'fs';
export const fileToArrayOfString = (path, separator) => fs.readFileSync(path).toString().split(separator);


