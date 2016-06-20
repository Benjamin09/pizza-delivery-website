// function pizzaOrder(size,sauce,toppings) {
//   this.size = size;
//   this.sauce = sauce;
//   this.toppings = toppings;
//
// }
//
// $(document).ready(function(){
//   $('#pizzaOrder').submit(function(event) {
//     event.preventDefault();
//     var size = $('#size').val();
//     var sauce = $('#sauce').val();
//     var toppings = $('#toppings').val();
//     var anotherPizza = new pizzaOrder(size,sauce,toppings);
//
//     $('#pizzaOrder').append("<li><span class ='taskClick'>"+ anotherPizza.pizzaOrder +"</span><span class='removeButton glyphicon glyphicon-remove'></span></li>");
//
//     $('.taskClick').last().click(function() {
//       $('#pizzaOrder').show();
//       $('.pizzaSize').text(anotherPizza.pizzaSize);
//       $('.pizzaSauce').text(anotherPizza.pizzaSauce);
//       $('.pizzaToppings').text(anotherPizza.pizzaToppings);
//
//     });
//
//     $('.removeButton').last().click(function(){
//       $(this).parent().remove();
//     });
//   });
// });

var Pizza = function(toppings, howBig, quantity) {
   this.toppings = toppings;
   this.howBig = howBig;
   this.quantity = quantity;
 };


 Pizza.prototype.cost = function() {
   return 10 * this.quantity;
 };


 var Order = function(pizzas) {
   var cost = 0;
   var confirmation = 'You have ordered ';
   pizzas.forEach(function(pizza) {
     cost += pizza.cost();
     confirmation += pizza.quantity + ' ' + pizza.howBig + ' ' +
                     pizza.toppings + ' pizzas' + '; ';
   });
   confirmation += "which costs a total of " + "$" + cost + ".";
   this.confirmation = confirmation;
   this.cost = cost;
   this.pizzas = pizzas;
 };




 $(function() {
   $('#add-pizza').click(function(event) {
     event.preventDefault();
     $('#new-pizza').append(
       '<div class="single-pizza-forms">' +
         '<div class="form-group">' +
           '<label for="toppings">Toppings:</label>' +
           '<input type="text" class="form-control" id="toppings">' +
         '</div>' +


         '<div class="form-group">' +
           '<label for="size">Size:</label>' +
           '<input type="text" class="form-control" id="size">' +
         '</div>' +


         '<div class="form-group">' +
           '<label for="quantity">Quantity:</label>' +
           '<input type="text" class="form-control" id="quantity">' +
         '</div>' +
       '</div>'
     );
   });


   $('#order').click(function(event) {
     event.preventDefault();
     var pizzas = []
     $('.single-pizza-forms').each(function() {


       if ($(this).find('#toppings').val()) {
         var toppings = $(this).find('#toppings').val();
       } else {
         var toppings = "Toppings"
       };


       if ($(this).find('#size').val()) {
         var size = $(this).find('#size').val();
       } else {
         var size = "Size"
       };


       if (parseInt($(this).find('#quantity').val())) {
         var quantity = parseInt($(this).find('#quantity').val());
       } else {
         var quantity = 99;
       };


       pizzas.push(new Pizza(toppings, size, quantity));
     });
     var order = new Order(pizzas);
     alert(order.confirmation);
     // alert("You have ordered a " + order.pizzas[0].toppings + 'pizza,' + 'which costs ' + order.cost);
   });
 });
