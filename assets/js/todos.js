// Check Off Specific Todos By Clicking
$("ul").on("click", "li" ,function(){
	$(this).toggleClass("completed");
});

// click on span to delete
$("ul").on("click", "span", function(event){
		$(this).parent().fadeOut(500,function(){
			$(this).remove();	
		});
	event.stopPropagation();
});

//exapmles of all clicks

// $("ul").on("click", function(){
// 	alert("u clicked ul");
// });

// $("#container").on("click", function(){
// 	alert("u clicked container");
// });

// $("body").on("click", function(){
// 	alert("u clicked body");
// });

// creating todo
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todotxt = $(this).val();
		$(this).val("");
		//create a new li aadd to ul
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i> </span>"+ todotxt + "</li>")
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});