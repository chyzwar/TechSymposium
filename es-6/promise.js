function httpGet(url) {
  return new Promise(
    function(resolve, reject) {
      var request = new XMLHttpRequest();

      request.onreadystatechange = function() {
        if (this.readyState === 4) {
          resolve(this.response);
        }
      }
      request.onerror = function() {
        reject(this.statusText)
      };
      request.open('GET', url);
      request.send();
    });
}

//https://www.fullcontact.com/
let apiKey = "1ff784a8ad825ecf";
let email = "schizek.marcin@gmail.com";

let query = `https://api.fullcontact.com/v2/person.json?email=${email}&apiKey=${apiKey}`

httpGet(query)
  .then(
    function(value) {
      console.log('Contents: ' + value);
    },
    function(reason) {
      console.error('Something went wrong', reason);
    }
);
