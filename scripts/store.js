'use strict';

const store = (function () {

  const foo = 'bar';
  let items = [{
        id: cuid(),
        name: 'apples',
        checked: false
      },
      {
        id: cuid(),
        name: 'oranges',
        checked: false
      },
      {
        id: cuid(),
        name: 'milk',
        checked: true
      },
      {
        id: cuid(),
        name: 'bread',
        checked: false
      }
    ],

    let hideCheckedItems = false;
  let searchTerm = '';

  return {
    items: items,
    hideCheckedItems: hideCheckedItems,
    searchTerm: searchTerm,
  }


}());


function findById(id){
  return store.items.find(); 
}

function addItem(name) {
  try { 
    if (Item.validateName === name) {
        this.items.push(name); 
    }

    }
  }
