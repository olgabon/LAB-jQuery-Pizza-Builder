// Write your Pizza Builder JavaScript in this file.
$(function(){

//default 
$("section.crust").toggleClass("crust-gluten-free");
$("section.sauce").toggleClass("sauce-white");

$(".btn-pepperonni").click(function(){ 
    $(".pep").toggle();
$(".btn-pepperonni").toggleClass("active");
$("li:contains('pepperonni')").toggle();
calcPrice()
})

$(".btn-mushrooms").click(function(){ 
    $(".mushroom").toggle();
$(".btn-mushrooms").toggleClass("active");
$("li:contains('mushrooms')").toggle();
    calcPrice()
})

$(".btn-green-peppers").click(function(){ 
    $(".green-pepper").toggle();
$(".btn-green-peppers").toggleClass("active");
$("li:contains('green peppers')").toggle();
calcPrice()
})

$(".btn-sauce").click(function(){
    $("section.sauce").toggleClass("sauce-white");  
    $(".btn-sauce").toggleClass("active");
})

$(".btn-crust").click(function(){ 
    $("section.crust").toggleClass("crust-gluten-free");
    $(".btn-crust").toggleClass("active");
})


function calcPrice(){
    var totalPrice = 18;
    if($(".btn-mushrooms").hasClass("active")) {
        totalPrice += 1
    };
    if($(".btn-pepperonni").hasClass("active")) {
        totalPrice += 1
    };
    if($(".btn-green-peppers").hasClass("active")) {
        totalPrice += 1
    };
    $("#totalPrice").html(totalPrice)

}

})
