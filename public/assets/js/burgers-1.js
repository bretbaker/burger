// prevent submission via 'enter' button
$(window).keydown(function (event) {
  if (event.keyCode == 13) {
    event.preventDefault();
    return false;
  }
});

// on click function to capture value for new burger added
$("#submit-button").on("click", function (event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();

  var newBurger = {
    burger_name: $("#burger-input").val().trim(),
  };

  // Send the POST request.
  $.ajax("/api/burgers", {
    method: "POST",
    data: newBurger
  }).then(
    function () {
      console.log("created new burger!");
      // Reload the page to get the updated list
      location.reload();
    }
  );
});

// on click function that changes value of 'devoured' from false to true
$(".devour-button").on("click", function (event) {

  event.preventDefault();

  var id = $(this).attr('value');
  console.log(id);
  var nowDevoured = {
    devoured: true
  };
  console.log(nowDevoured);
  // // Send the PUT request.
  $.ajax("/api/burgers/" + id, {
    method: "PUT",
    data: nowDevoured
  }).then(
    function () {
      console.log("changed devoured to true");
      // Reload the page to get the updated list
      location.reload();
    }
  );
});