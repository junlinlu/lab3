'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$("#testjs").text("click me");
		$(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);

	$("a.thumbnail").click(projectClick);

	function projectClick(e) { 
		console.log("Project clicked")
    // prevent the page from reloading      
    	e.preventDefault();
    // In an event handler, $(this) refers to      
    // the object that triggered the event      
    	$(this).css("background-color", "#adc8f4");
    	var containingProject = $(this).closest(".project");
    	var description = $(containingProject).find(".project-description")

    	if (description.length == 0){
    		$(containingProject).append("<div class='project-description'>\
    			<p>This is an animation project coded with python.</p></div>");
    	} else {
    		$(".project-description").fadeToggle();
    		/*description.html("<p>Stop clicking on me! You just did it at" 
    			+ (new Date()) + "</p>");*/
    	}
    }
    	

	$('#myelement').click(changeText);
	function changeText(event){
		$(this).html("now you don't");
		$("#myelement").fadeOut();
	}

	var test = $(".test");
	test.addClass("active");

	$(".test").click(function(e){
		$(this).toggleClass("active");
	});

	$("#image").animate({  //only return 1, can return lots of stuff with .
		"width":500
	}, 1000);

  

}