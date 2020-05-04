$(function(){
    $("button").click(function(){
	   $("span").show();
	   $("button").html("Hide this word");
	 $("button").click(function(){
	   $("span").hide();
       $("button").html("Show me a word");	   
	 }); 
    });
   
});