'use strict';

const apartment = (
  rooms = 1,
  bedrooms = 1,
  floor,
  sqrfootage = rooms * 250
) => {
  console.log(
    `This is a ${bedrooms} bedrooms apartment on floor ${floor}, totaling ${sqrfootage} square feet`
  );
};

apartment(undefined, undefined, 2);

apartment(16, 5, 30);

const ppm = 7000;

const tenant1 = {
  name: 'Louis Matsika',
  age: 23,
  job: 'Software Engineer',
};

const tenant2 = {
  name: 'Rick Grimes',
  age: 48,
  job: 'Hedge Fund Manager',
};

const tenant1Copy = {
  ...tenant1,
};

console.log(tenant1, tenant1Copy, tenant2, '\n', 'ppm:', ppm);

const checkLetAgreement = (ppm, tenant) => {
  tenant.name = 'Mr. ' + tenant.name;
  tenant.age < 30 ? (ppm = 7500) : (ppm = ppm);

  console.log(
    tenant.name,
    ': ',
    tenant.name === 'Mr. Louis Matsika' ? 'ready to sign!' : 'error'
  );
};

checkLetAgreement(ppm, tenant1);
checkLetAgreement(ppm, tenant2);

console.log(tenant1, tenant1Copy, tenant2, '\n', 'ppm:', ppm);

// First class functions: functions in JS are treated as values
const upperFirstWord = str => {
  const [firstWord, ...otherWords] = str.split(' ');
  return [firstWord.toUpperCase(), ...otherWords].join(' ');
};

console.log(upperFirstWord.name, ':', upperFirstWord('test test test'));

const swapNames = str => {
  const [firstName, secondName] = str.split(' ');
  return [secondName, firstName].join(' ');
};

console.log(swapNames.name, ':', swapNames('Louis Matsika'));

const maxIdNum = 1000;
const genIdNum = () => {
  return Math.trunc(Math.random() * maxIdNum)
    .toString()
    .padStart(4, '0');
};

console.log(genIdNum.name, ':', genIdNum());

// Higher order functions: functions that return a function, or functions that take in a function
const genTenantId = (name, idNum, swap, idName) => {
  return `${name}, generated tenantId: ${idNum()} ${idName(swap(name))}`;
};

console.log(genTenantId('Louis Matsika', genIdNum, swapNames, upperFirstWord));

// callbacks
const hellooo = () => {
  console.log('hellooo');
};

document.body.addEventListener('click', hellooo);

// functions returning functions

// function greet(greeting) {
//   return function greetPerson(name) {
//     return console.log(`${greeting} ${name}`);
//   };
// }

const greet = greeting => {
  const greetPerson = name => {
    console.log(`${greeting} ${name}`);
  };
  return greetPerson;
};

greet('hey')('Louis');
greet('yo')('SAI');

const greeterHey = greet('hey');
greeterHey('Maiken');

const greeterYo = greet('yo');
greeterYo("Pi'erre");

const greeterHeyo = greeting => name => console.log(`${greeting} ${name}`);

greeterHeyo('heyo')('James');

// call and apply

const dynasty8 = {
  name: 'Dynasty8',
  code: 'D8',
  contracts: [],
  sign(propertyCode, signer) {
    console.log(
      `${signer} has acquired property ${propertyCode}. Contract offer from ${this.name} (${this.code})`
    );

    this.contracts.push({ signer: `${signer}`, property: `${propertyCode}` });
  },
};

dynasty8.sign('W1A111', 'Louis Matsika');
dynasty8.sign('001001', "SAI's fate.");
console.log(dynasty8.contracts);

const mazeBank = {
  name: 'Maze Bank',
  code: 'MB',
  contracts: [],
};

const sign = dynasty8.sign;

// sign('LB0115', 'Rick Richtofen'); // error: js doesn't know what .this should be
// call method

sign.call(mazeBank, '3KB024', 'Steve Kurbert');
sign.call(mazeBank, 'RN9ZM2', 'Rick Grimes');

const prixLuxury = {
  name: 'Priv Lux',
  code: 'PL',
  contracts: [],
};

sign.call(prixLuxury, 'M10SV1', 'Tony Montana');
sign.call(prixLuxury, 'SP10H1', 'Montgomery Burns');

console.log(dynasty8, mazeBank, prixLuxury);

// apply method

const contractInfo1 = ['CT0L10', 'Takeo Masaki'];
const contractInfo2 = ['CT0L33', 'Kayan fortonimus Jr'];
const contractInfo3 = ['M22L12', 'SAI Huncho'];

sign.apply(dynasty8, contractInfo1);
sign.apply(mazeBank, contractInfo2);
sign.call(prixLuxury, ...contractInfo3);

console.log(dynasty8, mazeBank, prixLuxury);
