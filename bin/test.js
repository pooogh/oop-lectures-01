import { backToClass, readData } from '../practice/utility.js';

const data = readData();
// const search = Object.entries(data).forEach(([, value]) => value.find((name) => name === 'motiga'));
// for (const item in data) {
//     const f = data[item].find(({name}) => name === 'Maxim');
//     console.log(f);
//     if (f !== undefined) {
//         break;
//     }
// }
// console.log(search);
// 1. по значениям глоб ключей
// 2. по каждому значению, ищем вхождение
// 3. фильтруем undef/вернуть первый не undef
console.log(filtered.at(0));
