$(function() {
	$(".devourButton").on("click", function(event) {
		var id = $(this).data("id");
		function boule() {
			if ($(this).data("devouredStatus") !== true) {
				return true;
			}
			else {
				return false;
			}
		}
		console.log(boule());
		var newDevouredStatus = {
			id: id,
			devoured: boule()
		};
    	$.ajax("/", {
      	type: "PUT",
      	data: newDevouredStatus
   	}).then(function() {
	      	// $(this).data("devouredStatus", boule());
        console.log("changed devoured status to", newDevouredStatus.devoured);
        // location.reload();
      });
	});

	$(".form").on("submit", function(event) {
		event.preventDefault();

		var newBurger = {
			burgerName: $("#burgerToBe").val().trim()
		};

		$.ajax("/", {
			type: "POST",
			data: newBurger
		}).then(function() {
			console.log("a new burger has been created");
			location.reload();
		});
	});
});
