let rlSync = require('readline-sync')
let age = Number(rlSync.question('How old are you?\n'));
console.log(`You are ${age} years old.`)
for (let add = 10; add <= 40; add += 10) {
    console.log(`In ${add} years, you will be ${age + add} years old`);
}
