const person = {
    firstName: 'testFirstName',
    lastName: 'testLastName'
  };
  var book = {
    name: "The Principles of Object-Oriented JavaScript",
    year: 2014
   };
   const merge = Object.assign({},person,book)
   console.log(merge);