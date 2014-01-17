$(".img-thumbnail").parent().on("mouseenter", function(){
    console.log(this);
    $(this).find(".describe").fadeIn();
});

$(".img-thumbnail").parent().on("mouseleave", function(){
    $(this).find(".describe").fadeOut();
}); 

$('#lefty').height($(document).height());