$(function() {
	$(".devourButton").on("click", function(event) {
		var id = $(this).data("id");
		var 
	});

	$(".form").on("submit", function(event) {
		event.preventDefault();

		var newBurger = {

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
