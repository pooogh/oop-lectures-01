import fs from 'fs';
import path from 'path';
import _, { values } from 'lodash';

const setTribe = (member) => {
  const pathToFile = path.resolve('data/people.json');
  const data = JSON.parse(fs.readFileSync(pathToFile, 'utf-8'));
  data.alive.push(member);
  console.log(data);
  fs.writeFileSync(pathToFile, JSON.stringify(data, null, 2), 'utf-8');
};
// setTribe();


// изменение данных о состоянии объекта
const editTribe = (member) => {
  const pathToFile = path.resolve('data/people.json');
  const data = JSON.parse(fs.readFileSync(pathToFile, 'utf-8'));
  const filtered = data.alive.filter(({name}) => name !== member.name);
  filtered.push(member);
  data.alive = filtered;
  fs.writeFileSync(pathToFile, JSON.stringify(data, null, 2), 'utf-8');
}

// удаление объекта
const setDeadTribe = (member) => {
  const pathToFile = path.resolve('data/people.json');
  const data = JSON.parse(fs.readFileSync(pathToFile, 'utf-8'));
  const filtered = data.alive.filter(({name}) => name !== member.name);
  data.alive = filtered;
  data.dead.push(member);
  fs.writeFileSync(pathToFile, JSON.stringify(data, null, 2), 'utf-8');
}

// возвращаем объект json в объект класса
const backToClass = (nameToFind) => {
  const pathToFile = path.resolve('data/people.json');
  const data = JSON.parse(fs.readFileSync(pathToFile, 'utf-8'));
  const found = data.alive.find(({name}) => name === nameToFind);
  let classObj;
  switch (found.className) {
    case 'tumbaumba':
      classObj = new TumbaUmba(nameToFind);
      break;
    case 'sigmaboss':
      classObj = new SigmaBoss(nameToFind);
      break;
    case 'tools':
      classObj = new Tools(nameToFind);
      break;
    case 'weapon':
      classObj = new Weapon(nameToFind);
      break;
    default:
      classObj = new BattleDog(nameToFind);
      break;
  }
  const entries = Object.entries(found);
  // [[k1, v1], [k2, v2]]
  for ([key, value] of entries) {
    if (_.isObject(value)) {
      classObj[key] = value.map((item) => backToClass(item));
    } else {
      classObj[key] = value;
    }
  }
}
export default setTribe;
