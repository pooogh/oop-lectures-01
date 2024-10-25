import fs from 'fs';

const student = {
  name: 'Denix',
  getName(group = '01-23', tutor = 'Tanya') {
    return `${this.name}, ${group}, ${tutor}`;
  },
  // getName: function getName() {}
};

const studentsName = student.getName();
// console.log(studentsName);

const student2 = {
  name: 'Ivan',
};

const student3 = {
  name: 'Timofey aka sladkaya bulo4ka',
};

const student4 = {
  name: 'Hadi',
};
// bind, call, apply - методы функций, которые вызывают ее с контекстом из аргумента
// bind - возвращает новую ф-цию, которая представляет собой вызов фукнции с контекстом
const studentsName2 = student.getName.bind(student2);
// const x = [1, 2, 3];
// console.log(studentsName2('1102', 'Nikita'))
// const fn = () => {}

// apply - возвращает результат работы ф-ции с новым контекстом
const studentsName3 = student.getName.apply(student3, ['1102', 'Lara']);
// console.log(studentsName3);

// call - возвращает результат работы ф-ции с новым контекстом
const data = ['1102', 'Kolya'];
const studentsName4 = student.getName.call(student4, ...data);
// console.log(studentsName4)

const sum = (a, b) => a + b;
const newSum = sum.bind(null, 8);
// console.log(newSum(10))
// sum.bind('null', 8) => sum = (8, b) => 8 + b;

// контекст и стрелочные функции
const fn = () => this;
function fn2() {
  return this;
}

console.log(fn(), fn2());
const obj = {
  fn,
  fn2,
  fn3() {
    const x = () => this;
    return x();
  },
};
console.log(obj.fn(), obj.fn2(), obj.fn3());


// конструкторы
function setCount(count) {
  this.count = count;
  return true;
};

function Group(name, department) {
  this.name = name;
  this.department = department;
  this.getInfo = function getInfo() {
    return `${this.name}, ${this.department}`;
  };
  this.setCount = setCount;
};

const gr01 = new Group('01-23.ISAP.OF.11', 'IT');
gr01.setCount(30);
console.log(gr01);
const gr03 = new Group('03-23.ISAP.OF.11', 'IT');
console.log(gr03)

// прототипы
const array = [];
Array.prototype.includes = function includes() {
  console.log('new');
};
array.includes();
console.log(typeof(array));

function Student(name='', group='') {
  this.name = name;
  this.group = group;
};
Student.prototype.setName = function setName(name) {
  this.name = name;
  return true;
}

const ivan = new Student();
ivan.setName('Ivan');
console.log(ivan);


// раскарковка 
const name = 'Denis';
name.split('');
console.log(typeof(name));

const age = new Number(23);
console.log(age + ' is age of Denis');
const name2 = new String('Denis');
const isDead = new Boolean();
console.log(name2 + ' ...');

// .toString()
const denis = {
  name: 'Denis',
  age: 23,
  toString() {
    return `${this.name}, ${this.age}`;
  }
};

console.log(name2.toString());
console.log(denis.toString());
console.log(JSON.stringify(denis, null, 2));
console.log(`${name2}`);
// denis.prototype.toString = function toString() {
//   return `${this.name}, ${this.age}`;
// };
console.log(`${denis}`);

// статические св-ва и методы
class Teacher {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  };

  getInfo() {
    return `${this.name}, ${this.department}, ${this.constructor.wardrobe}`;
  };

  static wardrobe = false;
  static setWardrobe() {
    this.wardrobe = this.wardrobe === false ? true : false;
  };
};

const t1 = new Teacher('Nikolay', 'IT');
console.log(t1.getInfo());
const t2 = new Teacher('Artem Evgenievich', 'IT');
console.log(t2.getInfo());
t1.department = 'design';
// Teacher.wardrobe = true;
console.log(Teacher.wardrobe);
Teacher.setWardrobe();
console.log(Teacher.wardrobe)
console.log(t2.getInfo());
console.log(t1.getInfo());

// исключения
try {
  const x = 6;
  x = 8;
  console.log(x);
} catch {
  console.log('error');
}

const readData = () => {
  try {
    const data = fs.readFileSync('folder/data.js');
    return data;
    // console.log('try')
  } catch {
    throw new Error('filePath error');
    // const data = fs.readFileSync('folder/data.js');
    // return data;
    // console.log('catch')
  } 
  // finally {
  //   console.log('finally');
  // }
};

// readData();

const editData = () => {
  try {
    const data = readData();
    console.log('kek')
  } catch(e) {
    if (e.message === 'filePath error') {
      // действия
      console.log('ошибка пути');
    } else {
      console.log('ошибка не пути');
    }
  }
}

editData()