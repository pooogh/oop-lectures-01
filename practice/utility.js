import fs from 'fs';
import path from 'path';

const setTribe = (member) => {
    const pathToFile = path.resolve('data/people.json');
    const data = JSON.parse(fs.readFileSync(pathToFile, 'utf-8'));
    data.alive.push(member);
    console.log(data);
    fs.writeFileSync(pathToFile, JSON.stringify(data, null, 2), 'utf-8');
}
// setTribe();

export default setTribe;