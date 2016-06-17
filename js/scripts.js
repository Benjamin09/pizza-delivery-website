function Task(size,sauce,toppings) {
  this.size = size;
  this.sauce = sauce;
  this.toppings = toppings;

}

$(document).ready(function(){
  $('#toDoForm').submit(function(event) {
    event.preventDefault();
    var size = $('#size').val();
    var sauce = $('#sauce').val();
    var toppings = $('#toppings').val();
    var anotherPizza = new Task(size,sauce,toppings);

    $('#taskList').append("<li><span class ='taskClick'>"+ newTask.taskTitle +"</span><span class='removeButton glyphicon glyphicon-remove'></span></li>");

    $('.taskClick').last().click(function() {
      $('#taskDetails').show();
      $('.taskTitle').text(newTask.taskTitle);
      $('.startTime').text(newTask.startTime);
      $('.endTime').text(newTask.endTime);
      $('.details').text(newTask.details);
    });

    $('.removeButton').last().click(function(){
      $(this).parent().remove();
    });
  });
});
