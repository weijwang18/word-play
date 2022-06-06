$(document).ready(function () {
  $("form#wordPlay").submit(function (event) {
    event.preventDefault();
    const userInput = $("#input").val().split(" ");
    let index = 0;
    let newArray = [];
    userInput.forEach(function (element) {
      if (userInput[index].length >= 3 && index <= userInput.length - 1) {
        newArray.push(userInput[index]);
        index = index + 1;
      } else {
        index = index + 1;
      }
    });
    $(".message").text(newArray.reverse().join(" "));
  });
});
