'use strict';

function validateName(name) {
  if (!name) {
    throw new Error('this is the error message');
  }
}

function create(name) {
  return {
    id: cuid(),
    name, 
    checked: false, 
  };
}

const Item = (function () {

  return {
    name: 'Neill',
    validateName,
    create, 
  };
}() );

