function pizzaOrder(size,sauce,toppings) {
  this.size = size;
  this.sauce = sauce;
  this.toppings = toppings;

}

$(document).ready(function(){
  $('#pizzaOrder').submit(function(event) {
    event.preventDefault();
    var size = $('#size').val();
    var sauce = $('#sauce').val();
    var toppings = $('#toppings').val();
    var anotherPizza = new pizzaOrder(size,sauce,toppings);

    $('#pizzaOrder').append("<li><span class ='taskClick'>"+ anotherPizza.pizzaOrder +"</span><span class='removeButton glyphicon glyphicon-remove'></span></li>");

    $('.taskClick').last().click(function() {
      $('#pizzaOrder').show();
      $('.pizzaSize').text(anotherPizza.pizzaSize);
      $('.pizzaSauce').text(anotherPizza.pizzaSauce);
      $('.pizzaToppings').text(anotherPizza.pizzaToppings);
    
    });

    $('.removeButton').last().click(function(){
      $(this).parent().remove();
    });
  });
});
