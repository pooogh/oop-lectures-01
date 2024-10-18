const student = {
    name: 'Denix',
    getName(group='01-23', tutor='Tanya') {
        return `${this.name}, ${group}, ${tutor}`;
    }
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
    name: 'Hadi'
}
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

