///////////back logic////////////////////////////
function Pizza(size,sauce,toppings,quantity){
  this.size = size;
  this.sauce = sauce;
  this.toppings = toppings;
  this.quantity = quantity;
}
//////price pizza array/////////////////////
var priceOptionsArray = [];
Pizza.prototype.basePrice =function(){
  if (this.size ==="14"){
    return priceOptionsArray.push(15.00);
  }else if (this.size ==="12"){
    return priceOptionsArray.push(12.00);
  }else if (this.size ==="10"){
    return priceOptionsArray.push(9.99);
    return priceOptionsArray;
  }else{
  return "please choice a size";
  }
}
/////////price sauce array/////////
Pizza.prototype.addSauce = function(){
  var sauceChoice = [
    {sauce: "no sauce please", price: 0.00},
    {sauce: "Rocket Origanal", price: 0.00},
    {sauce: "White Rocket", price: 0.50},
    {sauce: "Zesty Red Rocket", price: 1.00}
  ];
  for (var prop in sauceList){
    if (sauceChoice[prop]['sauce'] === this.sauce){
    priceOptionsArray.push(sauceChoice[prop]['price']);
    }
  }
  return priceOptionsArray;
}
///////price toppings array//////////////
Pizza.prototype.addToppings = function(){
  var toppingsChoice = [
    {toppings: "mushrooms", price: 0.50},
    {toppings: "pepperoni", price: 0.50},
    {toppings: "bacon", price: 0.70},
    {toppings: "pinapple", price: 0.60}
  ];
  for (var prop in toppingsChoice){
    for (var i=0; i < this.toppings.length; i++){
      if (this.toppings[i] == toppingChoice[prop]['topping']){
      priceOptionsArray.push(toppingChoice[prop]['price']);
      }
    }
    return PriceOptionsArray;
  }
}
/////price compulation//////////////////
Pizza.prototype.totalPrice = function(){
  var finalPrice = 0;
  for (var i=0; i < priceOptionsArray.length; i++){
    finalPrice = finalPrice +  priceOptionsArray[i];
  }return finalPrice.toFixed(2) * this.quantity;
}
$(function() {
  $("form#pizzaForm").submit(function(event) {
    debugger;
    event.preventDefault();
    $('#orderSummary, #orderPrice').empty();
    var pizzaSize = $("input[name='size']:checked").val();
    var pizzaSauce = $("input[name='sauce']:checked").val();
    var quantity = ($('input#quantity').val());
    var pizzaToppings = [];
    $.each($("input[name='topping']:checked"), function() {
    pizzaToppings.push($(this).val());
    });

    if (quantity <= 0){
      alert("Please enter a positive quantity");
    }else if($("input[name='topping']:checked").length <= 0 ||  $("input[name='sauce']:checked").length <= 0){
      alert("Please select toppings/sauce");
    }else {
      $(".order").show();

      $('#orderSummary').append(newPizza.quantity + " " + newPizza.size + '" pizza(s) with ' + newPizza.sauce.toLowerCase() + ", " + newToppings.toLowerCase());

      $('#orderPrice').append("Your total is: $" + newPizza.totalPrice());

        document.getElementById("pizzaForm").reset();

    }
  });

});
