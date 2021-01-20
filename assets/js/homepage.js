var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");

var getUserRepos = function(user) {
    console.log("function was called");

    var response = fetch(`https://api.github.com/users/${user}/repos`);
    console.log(response);

};
getUserRepos("octocat");
var formSubmitHandler = function(event) {
    event.preventDefault();
    console.log(event);
    // get value from input element
    var username = nameInputEl.value.trim();

    if (username) {
    getUserRepos(username);
    nameInputEl.value = "";
    } else {
    alert("Please enter a GitHub username");
    }
};
  


userFormEl.addEventListener("submit", formSubmitHandler);
