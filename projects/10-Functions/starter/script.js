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
