import path, { resolve } from 'path';
import { exists } from './utils.mjs';

console.log(path.resolve('.'));
console.log(exists(path.resolve('.')));

(async () => { 
    await new Promise(resolve => { 
        setTimeout(resolve, 1000);
        console.log('ok');
    })
})();