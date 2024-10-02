import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import readlineSync from 'readline-sync';
import SigmaBoss from './classes/sigma.js';
import BattleDog from './classes/battle-dog.js';
import Tool from './classes/tool.js';
import TumbaUmba from './classes/tumbaumba.js';
import Weapon from './classes/weapon.js';

const getPath = () => path.resolve('data/units.json');

const readData = () => JSON.parse(fs.readFileSync(getPath(), 'utf-8'));

const updateJSON = (data) => fs.writeFileSync(getPath(), JSON.stringify(data, null, 2), 'utf-8');

const setObject = (member) => {
  const data = readData();
  member.className === 'BattleDog' ? data.dog.push(member)
    : member.className === 'Tool' || member.className === 'Weapon'
      ? data.item.push(member) : data.alive.push(member);
  updateJSON(data);
};
// setTribe();

const addItem = () => {
  const data = readData();

  const listOfNames = data.alive.map(({ name }) => name);
  const indexOfName = readlineSync.keyInSelect(listOfNames, 'Кому добавляем: ');

  const person = data.alive.at(indexOfName);
  let item;
  if (person.className === 'SigmaBoss') {
    const listOfItems = data.item.map(({ name }) => name);
    const indexOfItem = readlineSync.keyInSelect(listOfItems, 'Что добавляем: ');
    item = data.item.at(indexOfItem);
  } else {
    const choice = readlineSync.keyInSelect(['собаки', 'инструменты'], 'Кого/что добавляем? ');
    if (choice === 0) {
      const listOfDogs = data.dog.map(({ name }) => name);
      const indexOfDog = readlineSync.keyInSelect(listOfDogs, 'Кого добавляем: ');
      item = data.dog.at(indexOfDog);
    } else {
      const listOfTools = data.item.filter(({className}) => className === 'Tool');
      const listOfToolNames = listOfTools.map(({name}) => name);
      const indexOfTool = readlineSync.keyInSelect(listOfToolNames, 'Что добавляем: ');
      item = listOfTools.at(indexOfTool);
    }
  }


};
// ф-ция, которая терминально создает объект класса и сохраняет его
const createData = () => {
  const classes = ['SigmaBoss', 'TumbaUmba', 'Tool', 'Weapon', 'BattleDog'];
  const index = readlineSync.keyInSelect(classes, 'Кого создаем? ');

  if (index === -1) {
    return false;
  }

  const className = classes[index];
  const name = readlineSync.question('Имя/название: ');

  let classObj;
  switch (className) {
    case 'TumbaUmba':
      classObj = new TumbaUmba(name);
      break;
    case 'SigmaBoss':
      classObj = new SigmaBoss(name);
      break;
    case 'Tool':
      classObj = new Tool(name);
      break;
    case 'Weapon':
      classObj = new Weapon(name);
      break;
    default:
      classObj = new BattleDog(name);
      break;
  }

  console.log(classObj);
  setObject(classObj);
  return true;
};
// изменение данных о состоянии объекта
const editTribe = (member) => {
  const data = readData();
  const filtered = data.alive.filter(({ name }) => name !== member.name);
  filtered.push(member);
  data.alive = filtered;
  updateJSON(data);
};

// удаление объекта
const setDeadTribe = (member) => {
  const data = readData();
  const filtered = data.alive.filter(({ name }) => name !== member.name);
  data.alive = filtered;
  data.dead.push(member);
  updateJSON(data);
};

// возвращаем объект json в объект класса
const backToClass = (nameToFind) => {
  const data = readData();
  const objEntries = Object.entries(data);
  // [['alive', []], ['item', []]]
  // подумать
  // что возвращает .find(), если не находит вхождение?
  const found = objEntries.forEach(([, value]) => value.find((name) => name === nameToFind));
  // const found = data.find(({ name }) => name === nameToFind);
  let classObj;
  switch (found.className) {
    case 'TumbaUmba':
      classObj = new TumbaUmba(nameToFind);
      break;
    case 'SigmaBoss':
      classObj = new SigmaBoss(nameToFind);
      break;
    case 'Tool':
      classObj = new Tool(nameToFind);
      break;
    case 'Weapon':
      classObj = new Weapon(nameToFind);
      break;
    default:
      classObj = new BattleDog(nameToFind);
      break;
  }
  const entries = Object.entries(found);
  // [[k1, v1], [k2, v2]]
  // for ([key, value] of entries) {
  //   if (_.isObject(value)) {
  //     classObj[key] = value.map((item) => backToClass(item));
  //   } else {
  //     classObj[key] = value;
  //   }
  // }
  entries.forEach(([key, value]) => {
    classObj[key] = _.isObject(value)
      ? value.map((item) => backToClass(item))
      : value;
  });
};
export default createData;
