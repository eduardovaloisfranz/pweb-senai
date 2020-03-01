let todos = [];

const axios = require('axios');


// Make a request for a user with a given ID
axios.get('https://jsonplaceholder.typicode.com/todos/')
  .then(function (response) {
    // handle success
 
    todos.push(JSON.parse(JSON.stringify(response.data)));
    /*
    todos.push({
        userId : response[0],
        id: response[1],
        title: response[2],
        completed: response[3]
    })*/
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
    console.log("Fim execução")
    console.log(todos)
  });


  