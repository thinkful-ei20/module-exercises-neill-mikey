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

  function addItem(name) {
    try {
      Item.validateName(name);
      this.items.push(Item.create(name));
    } catch (err) {
      console.log('Error in addItem function');
      console.error(err);
    }

    function findById(id) {
      return store.items.find(event => event );
    }

  }

}());